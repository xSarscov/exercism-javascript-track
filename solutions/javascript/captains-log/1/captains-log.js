// @ts-check

const MAX_REGISTRY_NUMBER = 9999;
const MIN_REGISTRY_NUMBER = 1000;

const MAX_STARDATE = 42000.0;
const MIN_STARDATE = 41000.0;

const PLANETARY_CLASSES = ['D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y'];

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  const randomNumberGenerated = Math.floor(
    Math.random() * (MAX_REGISTRY_NUMBER - MIN_REGISTRY_NUMBER + 1) + MIN_REGISTRY_NUMBER 
  );
  return `NCC-${randomNumberGenerated}`;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  return Math.random() * (MAX_STARDATE - MIN_STARDATE) + MIN_STARDATE;
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const randomIndexGenerated = Math.floor(
    Math.random() * PLANETARY_CLASSES.length
  );
  
  return PLANETARY_CLASSES[randomIndexGenerated];
}
