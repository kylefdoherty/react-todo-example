import { renderComponent, expect } from './test_helper';
import App from '../src/App';

describe('App', () => {
  it('has an add todo input', () => {
    const app = renderComponent(App);
    expect(app.find('textarea')).to.exist
  });
});
