import { Suspense } from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import App from './App';


jest.mock('components', () => ({
  Button: (props) => (
    <button type='button'>{props.text}</button>
  ),
}));


test('Default img is rendered when Logo is undefined in state', async () => {
  render(
    <Suspense fallback="loading...">
      <App />
    </Suspense>
  );
  await waitFor(() => expect(screen.queryByText('loading...')).not.toBeInTheDocument());

  screen.getByText('Click');
});
