const { add } = require('./index');

function testAdd() {
  if (add(2, 3) === 5) {
    console.log('✅ Test Passed: add(2, 3) === 5');
    process.exit(0); // success
  } else {
    console.error('❌ Test Failed: add(2, 3) !== 5');
    process.exit(1); // fail
  }
}

testAdd();
