import express from 'express';
import data from '../src/testData';

const router = express.Router();
const contests = data.contests.reduce((obj, contest) => {
  obj[contest.id] = contest;
  return obj;
}, {});  //{} at end are to start with a default empty object

router.get('/contests', (req, res) => {
  res.send({ contests : contests
  });
});

router.get('/contests/:contestId', (req, res) => {
  //Id in url is available as req.params.contestId
  let contest = contests[req.params.contestId];
  contest.description = 'There were a king with a large jaw and a queen with a plain face, on the throne of England; there were a king with a large jaw and a queen with a fair face, on the throne of France. In both countries it was clearer than crystal to the lords of the State preserves of loaves and fishes, that things in general were settled for ever';
  res.send( contest );
});

export default router;
