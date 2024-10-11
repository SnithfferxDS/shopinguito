import Swal from 'sweetalert2';

/**
 * @typedef {Object} Message
 * @property {string} icon - The icon to display (success, error, warning, info, question)
 * @property {string} title - The title of the alert
 * @property {string} text - The main text of the alert
 * @property {string} [type] - Optional type (can be used instead of icon)
 */

/**
 * Display an alert message using SweetAlert2
 * @param {Message} message - The message object containing alert details
 */
export function alertMessage(message) {
  Swal.fire({
    icon: message.icon || message.type || 'info',
    title: message.title,
    text: message.text,
    showConfirmButton: true,
  });
}

export function getParams(data) {
  let query = [];
  if (typeof data === 'object') {
    query = Object.entries(data).map(([key, value]) => `${key}=${value}`);
  }
  return query.join("&");
}