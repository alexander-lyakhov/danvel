<template lang="pug">
//- Use form to prevent browser autocomplete
form.input(autocomplete="off")
	//- title
	lbl.label(
		:for="id",
		:value="title"
	)

	//- field
	.input-field(
		:class="{'in-focus': isInFocus, 'has-error': hasError}"
	)
		//- field value
		input(
			type="text",
			:id="id",
			:name="name",
			:value="modelValue",
			@input="onInput",
			@focus="setFocus"
			@blur="setBlur"
		)
	//- Error message
	span.error(
		v-if="hasError"
	) *Ошибка ввода
</template>

<script>

import { ref } from 'vue'
import lbl from './label.vue'
export default {
	name: 'InputText',

	components: {
		lbl
	},

	props: {
		title: {
			type: String,
			default: 'Title'
		},

		id: {
			type: String,
			default: null
		},

		name: {
			type: String,
			default: null
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
		const isInFocus = ref(false)
		const hasError = ref(false)

		/**
		 * Methods
		 */
		const onInput = (e) => {
			ctx.emit('update:modelValue', e.target.value)
		}

		const setFocus = () => {
			isInFocus.value = true
		}

		const setBlur = () => {
			isInFocus.value = false
		}

		return {
			// variables
			isInFocus,
			hasError,

			// methods
			onInput,
			setFocus,
			setBlur
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
		outline: 1px solid $black;
		display: flex;
		align-items: center;
		width: 342px;
		height: 54px;
		margin-top: 4px;
		padding: 0 10px;

		&.in-focus {
			outline: 2px solid $black;
		}

		&.has-error {
			outline: 1px solid $red;
		}

		input {
			font-size: 20px;
			font-weight: bold;
			line-height: 26px;
			background: transparent;
			border: none;
			outline: none;
			width: 100%;
		}
	}

	// Error message
	& .error {
		font-size: 12px;
		color: $red;
		line-height: 14px;
		display: inline-block;
		margin-top: 4px;
	}
}
</style>
