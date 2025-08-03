// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
}

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }
  
  resize(newSize) {      
    const { width: resizeWidth, height: resizeHeight } = newSize;
    const { width: screenWidth, height: screenHeight } = this.screenSize;
    
    const windowX = this.position.x;
    const windowY = this.position.y;
    
    const smallestDimension = 1;
    
    const newWidth = this._normalizeBounds(resizeWidth, smallestDimension, screenWidth, windowX);
    const newHeight = this._normalizeBounds(resizeHeight, smallestDimension, screenHeight, windowY);
    
    this.size.resize(newWidth, newHeight);
  }

  move(newPosition) {
    const { x: moveX, y: moveY } = newPosition;
    const { width: screenWidth, height: screenHeight } = this.screenSize;

    const smallestPosition = 0;

    const windowWidth = this.size.width;
    const windowHeight = this.size.height;
    
    const newX = this._normalizeBounds(moveX, smallestPosition, screenWidth, windowWidth);
    const newY = this._normalizeBounds(moveY, smallestPosition, screenHeight, windowHeight);
    
    this.position.move(newX, newY);
  }

  _normalizeBounds(value, min, max, adjustment) {
    const adjustedMax = max - adjustment;
    const clampedValue = Math.min(adjustedMax, value);
    
    return Math.max(min, clampedValue);
  }
}

export const changeWindow = (newWindow) => {
  newWindow.move(new Position());
  
  newWindow.resize(new Size(400, 300));
  newWindow.move(new Position(100, 150));
  return newWindow;
}