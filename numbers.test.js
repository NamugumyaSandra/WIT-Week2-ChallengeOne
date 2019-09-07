describe('arrayContaining', () => {
    const expected = ['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen'];
    it('does not match if received contains more elements than those of the expected elements', () => {
        expect(['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen'].length).not.toEqual(expected.length);
      });
    it('matches if received contains elements', () => {
      expect(['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen']).toEqual(expect.arrayContaining(expected));
    });
    it('does not match if received does not contain expected elements', () => {
      expect(['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','sixteen']).not.toEqual(expect.arrayContaining(expected));
    });
    it('returns a square of the number in the expected elements',() =>{
        const data = {};
        data['three'] = Math.pow(3,2)
        expect(data).toEqual({'three':9})
    });
  });


