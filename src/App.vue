<template><v-app id="inspire">
    <v-navigation-drawer v-model="drawer" width="300">

        <v-card elevation="0">
            <v-card-text class="pt-8">
                <p class="text-primary text-h4 font-weight-bold">
                    <v-avatar size="80" class="mr-1" image="@/assets/logo/prevue_rocket.png"></v-avatar> Prevue
                </p>
            </v-card-text>
        </v-card>

        <v-divider class="mb-5"></v-divider>

        <v-list v-model:opened="open">

            <v-list-item link>
                <v-list-item-title>
                    <v-icon class="me-3" color="primary">mdi-monitor-dashboard</v-icon> Dashboard
                </v-list-item-title>
            </v-list-item>

            <v-list-group value="Administrator">
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props">
                        <v-list-item-title><v-icon class="me-3" color="primary">mdi-heart-pulse</v-icon>
                            Caregivers</v-list-item-title>
                    </v-list-item>
                </template>
                <v-list-item link to="/">
                    <v-list-item-title><v-icon class="me-3" color="primary">mdi-list-box</v-icon>
                        List</v-list-item-title>
                </v-list-item>
            </v-list-group>

            <v-list-group value="Clients">
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props">
                        <v-list-item-title><v-icon class="me-3" color="primary">mdi-account-group</v-icon>
                            Clients</v-list-item-title>
                    </v-list-item>
                </template>
                <v-list-item link to="/">
                    <v-list-item-title><v-icon class="me-3" color="primary">mdi-plus</v-icon> Create
                        Client</v-list-item-title>
                </v-list-item>
            </v-list-group>

            <v-list-group value="Courses">
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props">
                        <v-list-item-title><v-icon class="me-3" color="primary">mdi-school</v-icon>
                            Courses</v-list-item-title>
                    </v-list-item>
                </template>
                <v-list-item link to="/">
                    <v-list-item-title><v-icon class="me-3" color="primary">mdi-list-box</v-icon> My
                        Courses</v-list-item-title>
                </v-list-item>
            </v-list-group>

            <v-list-group value="Students">
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props">
                        <v-list-item-title><v-icon class="me-3" color="primary">mdi-account-school</v-icon>
                            Students</v-list-item-title>
                    </v-list-item>
                </template>
                <v-list-item link to="/">
                    <v-list-item-title><v-icon class="me-3" color="primary">mdi-plus</v-icon> Create
                        Student</v-list-item-title>
                </v-list-item>
            </v-list-group>

        </v-list>

    </v-navigation-drawer>

    <v-app-bar elevation="1">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <!-- <v-app-bar-title class="text-primary font-weight-bold">Hero Hub</v-app-bar-title> -->

        <template v-slot:append>
            <v-btn prepend-icon="mdi-account">John Doe</v-btn>
        </template>

    </v-app-bar>

    <v-main>
        <div class="main-container">
            <router-view />
        </div>

        <v-footer class="text-center d-flex flex-column ga-1 py-3">
            <div class="d-flex ga-3">
                <v-btn icon="mdi-facebook" color="secondary" density="comfortable" variant="text"></v-btn>
                <v-btn icon="mdi-twitter" color="secondary" density="comfortable" variant="text"></v-btn>
                <v-btn icon="mdi-linkedin" color="secondary" density="comfortable" variant="text"></v-btn>
                <v-btn icon="mdi-instagram" color="secondary" density="comfortable" variant="text"></v-btn>
            </div>

            <div class="text-caption font-weight-regular">
                <a href="#"> &copy; 202x Prevue. All rights reserved.</a>
            </div>
        </v-footer>
    </v-main>
</v-app></template>

<script setup>
import { ref } from 'vue';

const drawer = ref(true);
const menu = ref(false);
const open = ref(['Users'])

const admins = [
    ['Management', 'mdi-account-multiple-outline'],
    ['Settings', 'mdi-cog-outline'],
]
const cruds = [
    ['Create', 'mdi-plus-outline'],
    ['Read', 'mdi-file-outline'],
    ['Update', 'mdi-update'],
    ['Delete', 'mdi-delete'],
]
</script>
