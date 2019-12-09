import React from 'react';
import '@testing-library/jest-dom';
import {render, fireEvent} from '@testing-library/react';
import Controls from '../controls/Controls';

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