
export function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake;
}


export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}


export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  if (archerIsAwake) {
    return false;
  }
  return archerIsAwake || prisonerIsAwake;
}

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent,
) {
  if (petDogIsPresent && !archerIsAwake) {
    return true;
  }
  if (prisonerIsAwake && !knightIsAwake && !archerIsAwake && !petDogIsPresent) {
    return true;
  }
  return false;
}
