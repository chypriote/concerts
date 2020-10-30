module.exports = {
	extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
	// https://stylelint.io/user-guide/configuration
	rules: {
		'at-rule-empty-line-before': [
			'always',
			{
				except: [
					'after-same-name',
					'inside-block',
					'blockless-after-same-name-blockless',
					'blockless-after-blockless',
					'first-nested',
				],
			},
		],
		'block-opening-brace-space-after': 'never-single-line',
		'block-closing-brace-space-before': 'never-single-line',
		'declaration-block-semicolon-space-after': 'never-single-line',
		'declaration-block-single-line-max-declarations': 3,
		indentation: 'tab',
		'no-descending-specificity': [true, { severity: 'warning' }],
		'rule-empty-line-before': null,
		'selector-list-comma-newline-after': 'always-multi-line',
	},
}
