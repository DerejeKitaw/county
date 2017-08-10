import { CountyPage } from './app.po';

describe('county App', () => {
  let page: CountyPage;

  beforeEach(() => {
    page = new CountyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
