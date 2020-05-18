module.exports = {
  docs: {
    'User guide': [
      'user-guide/getting-started',
      'user-guide/configuration',
      {
        Rules: [
          'user-guide/list-rules',
          {
            'Individual rules': [
              'user-guide/rules/alt-require',
              'user-guide/rules/attr-no-duplication',
              'user-guide/rules/attr-lowercase',
              'user-guide/rules/attr-unsafe-chars',
              'user-guide/rules/attr-value-double-quotes',
              'user-guide/rules/attr-value-not-empty',
              'user-guide/rules/doctype-first',
              'user-guide/rules/empty-tag-not-self-closed',
              'user-guide/rules/head-script-disabled',
              'user-guide/rules/href-abs-or-rel',
              'user-guide/rules/id-class-ad-disabled',
              'user-guide/rules/id-class-value',
              'user-guide/rules/id-unique',
              'user-guide/rules/inline-script-disabled',
              'user-guide/rules/inline-style-disabled',
              'user-guide/rules/space-tab-mixed-disabled',
              'user-guide/rules/spec-char-escape',
              'user-guide/rules/src-not-empty',
              'user-guide/rules/style-disabled',
              'user-guide/rules/tag-pair',
              'user-guide/rules/tagname-lowercase',
              'user-guide/rules/title-require',
            ],
          },
        ],
        Usage: ['user-guide/usage/cli', 'user-guide/usage/options'],
        Integrations: [
          'user-guide/integrations/editor',
          'user-guide/integrations/task-runner',
        ],
      },
    ],
  },
}
