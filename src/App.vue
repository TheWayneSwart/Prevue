<script setup>
import { ref, onMounted } from 'vue';
import { useTheme } from 'vuetify';

const drawer = ref(true);
const open = ref(null);

// Theme management
const theme = useTheme();
const isDark = ref(theme.global.current.value.dark);

console.log(theme.global);

const toggleTheme = () => {
    isDark.value = !isDark.value;
    theme.global.name.value = isDark.value ? 'prevueDark' : 'prevueLight';
    localStorage.setItem('prevue-theme', isDark.value ? 'dark' : 'light');
};

// Load theme preference on app mount
onMounted(() => {
    const savedTheme = localStorage.getItem('prevue-theme');
    if (savedTheme) {
        isDark.value = savedTheme === 'dark';
        theme.global.name.value = isDark.value ? 'prevueDark' : 'prevueLight';
    }
});

</script>

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

                <v-list-item link to="/">
                    <v-list-item-title>
                        <v-icon class="me-3" color="primary">mdi-monitor-dashboard</v-icon> Dashboard
                    </v-list-item-title>
                </v-list-item>

                <v-list-group>
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props">
                            <v-list-item-title><v-icon class="me-3" color="primary">mdi-heart-pulse</v-icon>
                                Caregivers</v-list-item-title>
                        </v-list-item>
                    </template>
                    <v-list-item link>
                        <v-list-item-title><v-icon class="me-3" color="primary">mdi-list-box</v-icon>
                            List</v-list-item-title>
                    </v-list-item>
                </v-list-group>

                <v-list-group>
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props">
                            <v-list-item-title><v-icon class="me-3" color="primary">mdi-account-group</v-icon>
                                Clients</v-list-item-title>
                        </v-list-item>
                    </template>
                    <v-list-item link>
                        <v-list-item-title><v-icon class="me-3" color="primary">mdi-plus</v-icon> Create
                            Client</v-list-item-title>
                    </v-list-item>
                </v-list-group>

                <v-list-group>
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props">
                            <v-list-item-title><v-icon class="me-3" color="primary">mdi-school</v-icon>
                                Courses</v-list-item-title>
                        </v-list-item>
                    </template>
                    <v-list-item link>
                        <v-list-item-title><v-icon class="me-3" color="primary">mdi-list-box</v-icon> My
                            Courses</v-list-item-title>
                    </v-list-item>
                </v-list-group>

                <v-list-group>
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props">
                            <v-list-item-title><v-icon class="me-3" color="primary">mdi-account-school</v-icon>
                                Students</v-list-item-title>
                        </v-list-item>
                    </template>
                    <v-list-item link>
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
                <v-btn icon @click="toggleTheme" class="mr-2" :color="isDark ? 'secondary' : 'primary'">
                    <v-icon>{{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
                </v-btn>
                <v-btn class="mr-2" prepend-icon="mdi-account"><span class="d-none d-sm-block">John Doe</span></v-btn>
            </template>

        </v-app-bar>

        <v-main>
            <router-view />
        </v-main>

        <v-footer class="text-center flex flex-column" style="max-height: 70px;">
            <div class="d-flex">
                <v-btn icon="mdi-facebook" color="secondary" density="comfortable" variant="text"></v-btn>
                <v-btn icon="mdi-twitter" color="secondary" density="comfortable" variant="text"></v-btn>
                <v-btn icon="mdi-linkedin" color="secondary" density="comfortable" variant="text"></v-btn>
                <v-btn icon="mdi-instagram" color="secondary" density="comfortable" variant="text"></v-btn>
            </div>

            <div class="text-caption font-weight-regular">
                <a href="#"> &copy; 202x Prevue. All rights reserved.</a>
            </div>
        </v-footer>


    </v-app></template>