import { FirebaseOpensoftNotePage } from './app.po';

describe('firebase-opensoft-note App', () => {
  let page: FirebaseOpensoftNotePage;

  beforeEach(() => {
    page = new FirebaseOpensoftNotePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
