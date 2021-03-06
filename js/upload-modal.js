import {isEscapeKey} from './util.js';
import {resetScale} from './image-scale.js';
import {resetEffect} from './image-filter.js';

const uploadModalElement = document.querySelector('.img-upload__overlay');
const uploadModalCloseElement = uploadModalElement.querySelector('#upload-cancel');
const bodyElement = document.querySelector('body');

function onUploadModalEscKeydown (evt) {
  if (isEscapeKey(evt)
    && !evt.target.classList.contains('text__hashtags')
    && !evt.target.classList.contains('text__description')) {
    evt.preventDefault();
    closeUploadModal();
  }
}

function onUploadModalCloseClick () {
  closeUploadModal();
}

function openUploadModal () {
  uploadModalElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  resetEffect();

  document.addEventListener('keydown', onUploadModalEscKeydown);
  uploadModalCloseElement.addEventListener('click', onUploadModalCloseClick);
}

function closeUploadModal () {
  uploadModalElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');

  resetScale();
  resetEffect();

  document.removeEventListener('keydown', onUploadModalEscKeydown);
  uploadModalCloseElement.removeEventListener('click', onUploadModalCloseClick);
}

export {openUploadModal, closeUploadModal};
