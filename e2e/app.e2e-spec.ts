import { TechshareAppPage } from './app.po';

describe('techshare-app App', () => {
  let page: TechshareAppPage;

  beforeEach(() => {
    page = new TechshareAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
