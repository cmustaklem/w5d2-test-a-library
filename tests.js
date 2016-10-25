// Mocha & Chai Test Suite (for Tuesday's assignment)
// var chai = require('chai')
var expect = chai.expect;

describe('one() Function', function() {
  it('should fine one element', function() {
    expect(md.one('.navbar').tagName).to.equal('NAV')
  })
})

describe('all() Function', function() {
  it('should find all matching elements', function() {
    expect(md.all('.img-responsive').length).to.equal(4)
  })
})

describe('remove() Function', function() {
  it('should remove this', function() {
    md.remove('.active') //remove the class
    expect(document.querySelector('.active')).to.equal(null) //checks to be sure that it has been removed
  })
})

describe('addClass() Function', function() {
  it('should add in a class', function() {
    md.addClass('#navbar', 'test') //addin
    expect(document.querySelector('#navbar').classList.contains('test')).to.be.true
  })
})

describe('removeClass() Function', function() {
  it('should remove all matching classes', function() {
    md.removeClass('.form-control')
    expect(document.body.classList.contains('.form-control')).to.be.false
  })
})

describe('md.hasClass()', function() {
  it('should have a class', function() {
    expect(md.hasClass('body', 'placeholder')).to.be.true
  })
})

describe('md.getAttr()', function() {
  it('show you an attribute', function() {
    expect(md.getAttr('img', 'width').length).to.equal(3)
  })
})

describe('md.setAttr()', function() {
  it('sets an attribute', function() {
    md.setAttr('img', 'width', '500')
    expect(md.getAttr('img', 'width')).to.equal('500')
  })
})

describe('md.getHTML()', function() {
  it('gets the HTML', function() {
    expect(md.getHTML('h4')).to.equal('Winter (Q1)')
  })
})

describe('md.setHTML()', function() {
  it('sets the HTML', function() {
    md.setHTML('h4', 'Winter Wonderland')
    expect(md.getHTML('h4')).to.equal('Winter Wonderland')
  })
})

describe('md.flipPage()', function() {
    it('should flip the page upside down', function() {
        // add your setup code here
        md.flipPage('transform: rotate(180deg)')
        expect(document.body.style.transform).to.equal('rotate(180deg)')
        md.flipPage('transform: rotate(0deg)')
    })
})

describe('md.ajax()', function() {
    it('should return an object', function(done) {
      md.ajax('http://swapi.co/api/', function() {
        done()
      })

    });
});

// describe('addClass() Function', function() {
//   it('should add in a class', function() {
//     md.addClass('.collapse')
//     expect(document.body.classList.contains('.collapse')).to.be.false
//   })
// })

// describe('remove() Function', function() {
//   it('should remove matching elements', function() {
//     expect(md.remove('div', 'table-responsive')).to.be.equal('undefined')
//   })
// })
