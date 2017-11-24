import { ProfileSitePage } from './app.po';

describe('profile-site App', function() {
  let page: ProfileSitePage;

  beforeEach(() => {
    page = new ProfileSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
