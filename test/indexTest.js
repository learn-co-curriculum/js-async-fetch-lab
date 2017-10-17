const expect = chai.expect;

describe('index', () => {
  describe('getCategories', () => {
    it('calls uses the fetch api', function(){
      let fetchStub = sinon.spy(window, 'fetch');
      getCategories()
      sinon.assert.calledOnce(fetchStub)
      fetchStub.restore()
    })

    it('does not throw a no access error', function(){
      getCategories()
    })

    it('returns a promise', function(){
      expect(getCategories()).to.be.a('Promise')
    })

    it('is thennable, which returns a promise', function(){
      let thenReturnValue = getCategories().then(function(){})
      expect(thenReturnValue).to.be.a('Promise')
    })
  })

  describe('getCategoriesThen', function(){
    it('returns a promise', function(){
      expect(getCategoriesThen()).to.be.a('Promise')
    })

    it('is thennable, which returns a promise', function(){
      let thenReturnValue = getCategoriesThen().then(function(){})
      expect(getCategoriesThen().then()).to.be.a('Promise')
    })

    it('passes the data from the api to the next resolve function', function(){
      getCategoriesThen().then(function(response){
        expect(response.length).to.eq(5)
        expect(response[0].name).to.be.a('string')
      })
    })
  })

  describe('getCategoriesThenInterpretResponse', function(){
    it('returns a promise', function(){
      expect(getCategoriesThenInterpretResponse()).to.be.a('Promise')
    })

    it('is thennable, which returns a promise', function(){
      let thenReturnValue = getCategoriesThenInterpretResponse().then(function(){})
      expect(getCategoriesThen().then()).to.be.a('Promise')
    })

    it('sets the bookResponse to the api response', function(){
      getCategoriesThen().then(
        function(){
          expect(categories.length).to.eq(5)
          expect(categories[0].title).to.be.a('string')
          expect(categories[0].id).to.be.a('number')
        }
      )
    })
  })
})
