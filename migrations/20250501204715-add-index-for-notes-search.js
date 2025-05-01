
'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addIndex('notes', ['title', 'content'], {
      type: 'FULLTEXT',
      name: 'notes_fulltext_index'
    });
  },
  down: async (queryInterface) => {
    await queryInterface.removeIndex('notes', 'notes_fulltext_index');
  }
};
