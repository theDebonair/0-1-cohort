/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  return new Promise(resolve => {
    setTimeout(resolve, t, t);
  });
}

function wait2(t) {
  return new Promise(resolve => {
    setTimeout(resolve, t, t);
  });
}

function wait3(t) {
  return new Promise(resolve => {
    setTimeout(resolve, t, t);
  })
}

async function calculateTime(t1, t2, t3) {
  const date = new Date().getTime();
  const p1 = wait1(t1*1000);
  const p2 = wait1(t2*1000);
  const p3 = wait1(t3*1000);

  await Promise.all([p1, p2, p3]);
  return new Date().getTime() - date;
}

module.exports = calculateTime;
