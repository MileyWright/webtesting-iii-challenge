import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent} from '@testing-library/react';
import Controls from '../controls/Controls';

test('Provide buttons to toggle the closed/locked states', () => {
    const {getByText} = render(
        <Controls 
            data-testid = 'controls'
            locked={true}
            closed={true}
        />
    )
    const closed =getByText(/unlock gate/i);
    const open = getByText(/open/i);
    expect(closed).toBeVisible();
    expect(open).toBeVisible();
});

describe('buttons text changes to reflect the state the door will be in if clicked', () => {
    test('button toggle to Open and Unlocked', () =>{
        const toggleClosed = jest.fn();
        const toggleLocked =jest.fn();

        const {getByTestId} = render(
            <Controls
            data-testid='controls'
            locked={true}
            closed={true}
            toggleClosed = {toggleClosed}
            toggleLocked = {toggleLocked}
            />
        )
        const locked = getByTestId(/lock-unlock/i);
        const closed = getByTestId(/open-closed/i);
        
        fireEvent.click(locked);
        fireEvent.click(closed);

        expect(closed.textContent).not.toBe('Closed');
        expect(locked.textContent).not.toBe('Lock');
    })
    test('button toggle to Close and Unlock', () => {
        const toggleClosed = jest.fn();
        const toggleLocked = jest.fn();

        const {getByTestId} = render(
            <Controls
            data-testid = 'controls'
            locked ={false}
            closed={false}
            toggleClosed={toggleClosed}
            toggleLocked={toggleLocked}
            />
        );
        const locked = getByTestId(/lock-unlock/i);
        const closed = getByTestId(/open-closed/i);

        fireEvent.click(closed);
        fireEvent.click(locked);

        expect(closed.textContent).not.toBe('Open');
        expect(locked.textContent).not.toBe('Unlock');
    })
})

describe('The toggle button is disabled', () => {
    test('toggle is disabled if the gate is Open', () => {
        const {getByText} = render(
            <Controls
                data-testid='controls'
                locked={false}
                closed={false}
            />
        )
        expect(getByText(/lock/i)).not.toBeEnabled();
    })
    test('toggle is disabled if the gate is Locked', ()=> {
        const {getByText} = render(
            <Controls
                data-testid='controls'
                locked={true}
                closed={true}
            />
        )
        expect(getByText(/open gate/i)).not.toBeEnabled();
    })
})