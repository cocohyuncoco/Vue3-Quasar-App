import Vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';

export default {
    plugins: [Vue(), Pages(), Layouts()],
};