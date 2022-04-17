import { Injectable } from '@angular/core';

/**
 * All cursor type
 */
type CURSOR_TYPE =
  | 'cursor-default'
  | 'cursor-help'
  | 'cursor-hover'
  | 'cursor-loading'
  | 'cursor-loading-with-cursor'
  | 'cursor-hide';

/**
 * Set WIN XP cursor
 */
@Injectable({
  providedIn: 'root',
})
export class MouseService {
  constructor() {}

  /**
   * Get element by ID, default is document.body element if elementId is null
   * @param elementId
   * @private
   */
  private static getElementById(elementId: string | null): HTMLElement | null {
    return elementId === null
      ? document.body
      : document.querySelector(`#${elementId}`);
  }

  /**
   * Remove all cursor class for element get by Id, default is document.body element if elementId is null
   * @param elementId
   * @private
   */
  private static removeAllCursorClass(elementId: string | null) {
    let element = MouseService.getElementById(elementId);
    if (element === null) return;

    // Remove all cursor class
    element.classList.remove(
      'cursor-default',
      'cursor-help',
      'cursor-hover',
      'cursor-loading',
      'cursor-loading-with-cursor',
      'cursor-hide'
    );
  }

  /**
   * Set cursor class for element by ID, default is document.body element if elementId is null
   * @param elementId
   * @param cursorType
   * @private
   */
  private static setCursorClass(
    elementId: string | null,
    cursorType: CURSOR_TYPE
  ) {
    // First remove all cursor class
    MouseService.removeAllCursorClass(elementId);

    // Get element by Id
    let element = MouseService.getElementById(elementId);
    if (element === null) return;

    // Add cursor class
    element.classList.add(cursorType);
  }

  /**
   * Add hide cursor class for element by ID, default is document.body element if elementId is null
   * @param elementId
   */
  hideCursor(elementId: string | null = null): void {
    MouseService.setCursorClass(elementId, 'cursor-hide');
  }

  /**
   * Add default cursor class for element by ID, default is document.body element if elementId is null
   * @param elementId
   */
  setDefaultCursor(elementId: string | null = null): void {
    MouseService.setCursorClass(elementId, 'cursor-default');
  }

  /**
   * Add help cursor class for element by ID, default is document.body element if elementId is null
   * @param elementId
   */
  setHelpCursor(elementId: string | null = null): void {
    MouseService.setCursorClass(elementId, 'cursor-help');
  }

  /**
   * Add hover cursor class for element by ID, default is document.body element if elementId is null
   * @param elementId
   */
  setHoverCursor(elementId: string | null = null): void {
    MouseService.setCursorClass(elementId, 'cursor-hover');
  }

  /**
   * Add loading cursor class for element by ID, default is document.body element if elementId is null
   * @param elementId
   */
  setLoadingCursor(elementId: string | null = null): void {
    MouseService.setCursorClass(elementId, 'cursor-loading');
  }

  /**
   * Add loading cursor with cursor class for element by ID, default is document.body element if elementId is null
   * @param elementId
   */
  setLoadingCursorWithCursor(elementId: string | null = null): void {
    MouseService.setCursorClass(elementId, 'cursor-loading-with-cursor');
  }
}
