/**
 * External dependencies
 */
import type { ComponentMeta, ComponentStory } from '@storybook/react';

/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import ToggleControl from '..';

const meta: ComponentMeta< typeof ToggleControl > = {
	title: 'Components/ToggleControl',
	component: ToggleControl,
	argTypes: {
		checked: { control: { type: null } },
		help: { control: { type: 'text' } },
		label: { control: { type: 'text' } },
		onChange: { action: 'onChange' },
	},
	parameters: {
		controls: { expanded: true },
		docs: { canvas: { sourceState: 'shown' } },
	},
};
export default meta;

const Template: ComponentStory< typeof ToggleControl > = ( {
	onChange,
	...props
} ) => {
	const [ checked, setChecked ] = useState( true );
	return (
		<ToggleControl
			{ ...props }
			checked={ checked }
			onChange={ ( ...changeArgs ) => {
				setChecked( ...changeArgs );
				onChange( ...changeArgs );
			} }
		/>
	);
};

export const Default = Template.bind( {} );
Default.args = {
	label: 'Enable something',
};

export const WithHelpText = Template.bind( {} );
WithHelpText.args = {
	...Default.args,
	help: 'This is some help text.',
};
