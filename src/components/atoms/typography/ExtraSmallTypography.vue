<template>
  <TypographyBase v-bind="$props" class="text-xs font-normal text-fontPrimary">
    <slot></slot>
  </TypographyBase>
</template>

<script setup lang="ts">
import TypographyBase from '@src/components/atoms/typography/TypographyBase.vue';
</script>
