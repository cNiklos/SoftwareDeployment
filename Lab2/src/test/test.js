
import {expect} from 'chai'

describe("Tests", function () 
{
  it('Test 1', function(done) 
  {
    let t = 1 + 1;

    expect(t == 2);
    done();
  })

  it('Test 2', function(done) 
  {
    let t = 2 + 1;

    expect(t == 3);
    done();
  })
});
