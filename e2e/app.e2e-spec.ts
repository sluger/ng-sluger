import { NgSlugerPage } from './app.po';

describe('ng-sluger App', () => {
  let page: NgSlugerPage;

  beforeEach(() => {
    page = new NgSlugerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
