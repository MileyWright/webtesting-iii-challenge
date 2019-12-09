import React from 'react';
import Display from '../display/Display';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('Defaults to unlocked and open', () => {
    const wrapper = render(<Display />);
    const unlocked = wrapper.getByText(/unlocked/i);
    const open = wrapper.getByText(/open/i);

    expect(unlocked.textContent).toMatch('Unlocked');
    expect(open.textContent).toMatch('Open');
})

test('Displays if gate is closed and locked', () =>{
    const {getByText} = render(<Display locked={true} closed={true} />)
    const locked = getByText(/locked/i);
    const closed = getByText(/closed/i);

    expect(locked.textContent).toMatch('Locked');
    expect(closed.textContent).toMatch('Closed');
})

test('Displays Closed if the closed prop is true', () => {
    const {getByText} = render(<Display closed={true} />)
    const closed = getByText(/closed/i);

    expect(closed.textContent).toMatch('Closed');
})

test('Displays Open if closed prop is false', () => {
    const {getByText} = render(<Display closed={false} />);
    const open = getByText(/open/i);

    expect(open.textContent).toMatch('Open');
})

test('Displays Locked if the locked prop is true', () => {
    const {getByText} = render(<Display locked={true} />);
    const locked = getByText(/locked/i);

    expect(locked.textContent).toMatch('Locked');
})

test('Displays Unlocked if the locked prop is false', () => {
    const {getByText} = render(<Display locked={false} />);
    const unlocked = getByText(/unlocked/i);

    expect(unlocked.textContent).toMatch('Unlocked');
})

test('When using locked/closed the red-led class is actived', () => {
    const {getByText} = render(<Display locked={true} closed={true}/>)
    // const lockedAndClosed = getByText(/closed/i);
    
    expect(getByText(/closed/i)).toHaveClass('red-led');
})

test('When using unlocked/open the green-led class is actived', () => {
    const {getByText} = render(<Display locked={false} closed={false}/>)
    // const unlockedAndOpen = getByText(/open/i);

    expect(getByText(/open/i)).toHaveClass('green-led');
})
