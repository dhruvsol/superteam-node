const collaboratorStates = {
  REQUESTED: 'requested',
  ACCEPTED: 'accepted',
  REJECTED: 'rejected',
  BLOCKED: 'blocked',
  REMOVED: 'removed',
  DELETED: 'deleted',
  UNKNOWN: 'unknown',
};

const collaboratorSkills = {
  DEVELOPER: 'developer',
  DESIGNER: 'designer',
  RESEARCHER: 'researcher',
  WRITER: 'writer',
  PHOTOGRAHER: 'photographer',
  CINEMANTOGRAPHER: 'cinematographer',
  ARTIST: 'artist',
  MUSICIAN: 'musician',
  MARKETER: 'marketer',
  OTHER: 'other',
};

module.exports = {
  collaboratorStates,
  collaboratorSkills,
};
