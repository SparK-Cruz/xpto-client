import { SolyosXptoClientPage } from './app.po';

describe('solyos-xpto-client App', function() {
  let page: SolyosXptoClientPage;

  beforeEach(() => {
    page = new SolyosXptoClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
