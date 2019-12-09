// Test away
import React from 'react';
import * as rtl from 'react-testing-library';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';
afterEach(rtl.cleanup);

test('Displays <Display/>', () => {
    const {getByText}= rtl.render(<Dashboard/>);
    expect(getByText(/Unlocked/i)).toBeInTheDocument();
})
test('Displays <Controls/>' , () => {
    const {getByText} = rtl.render(< Dashboard />);
    expect(getByText(/Close Gate/i)).toBeInTheDocument();
});
 