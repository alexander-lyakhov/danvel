<template lang="pug">
.input.inputText
	//- field title
	span.input-title {{ title }}

	//- field
	.input-field
		//- field value
		input(type="password", :value="modelValue", @input="onInput" autocomplete="off")
</template>

<script>

import { ref } from 'vue'

export default {
	name: 'inputPassword',

	props: {
		title: {
			type: String,
			default: 'Title'
		},

		modelValue: {
			type: String,
			default: ''
		}
	},
	setup(props, ctx) {
		/**
		 * Variables
		 */
		const value = ref('')

		/**
		 * Methods
		 */
		const onInput = (e) => {
			ctx.emit('update:modelValue', e.target.value)
		}

		return {
			// variables
			value,

			// methods
			onInput
		}
	}
}
</script>

<style lang="scss" scoped>
.input {
	// Title
	&-title {
		font-size: 16px;
	}

	// Field
	&-field {
		background: $white;
		border: 1px solid #000000;
		display: flex;
		align-items: center;
		width: 342px;
		height: 54px;
		margin-top: 4px;
		padding: 0 10px;

		input {
			font-size: 20px;
			font-weight: bold;
			line-height: 26px;
			background: transparent;
			border: none;
			width: 100%;
		}
	}
}
</style>
