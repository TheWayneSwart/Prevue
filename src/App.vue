<script setup>
import { ref, onMounted, watch } from 'vue';
import { useTheme } from 'vuetify';

const drawer = ref(true);
const open = ref(null);

// Theme management
const theme = useTheme();
const isDark = ref(theme.global.current.value.dark);

onMounted(() => {

    // Set the theme from local storage
    const savedTheme = localStorage.getItem('prevue-theme');
    if (savedTheme) {
        isDark.value = savedTheme === 'dark';
        theme.global.name.value = isDark.value ? 'prevueDark' : 'prevueLight';
    }

});

const switchTheme = () => {
    isDark.value = !isDark.value;
    theme.global.name.value = isDark.value ? 'prevueDark' : 'prevueLight';
    localStorage.setItem('prevue-theme', isDark.value ? 'dark' : 'light');
};

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
                        <v-list-item-title><v-icon class="me-3" color="primary">mdi-shield-account</v-icon>
                            Administration</v-list-item-title>
                    </v-list-item>
                </template>
                <v-list-item link>
                    <v-list-item-title><v-icon class="me-3" color="primary">mdi-cog</v-icon>
                        System</v-list-item-title>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-title><v-icon class="me-3" color="primary">mdi-account-group</v-icon>
                        Users</v-list-item-title>
                </v-list-item>
            </v-list-group>

            <v-divider class="my-5"></v-divider>            

            <v-list-group>
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props">
                        <v-list-item-title><v-icon class="me-3" color="primary">mdi-account-group</v-icon>
                            Clients</v-list-item-title>
                    </v-list-item>
                </template>
                <v-list-item link>
                    <v-list-item-title><v-icon class="me-3" color="success">mdi-plus</v-icon> Create
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
                    <v-list-item-title><v-icon class="me-3" color="success">mdi-plus</v-icon>Create Course</v-list-item-title>
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
                    <v-list-item-title><v-icon class="me-3" color="success">mdi-plus</v-icon> Create
                        Student</v-list-item-title>
                </v-list-item>
            </v-list-group>

        </v-list>

    </v-navigation-drawer>

    <v-app-bar elevation="1">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <!-- <v-app-bar-title class="text-primary font-weight-bold">Hero Hub</v-app-bar-title> -->

        <template v-slot:append>
            
            <v-btn class="mr-2" prepend-icon="mdi-cog">
                <v-menu activator="parent" :close-on-content-click="false" class="pb-5">
                    <v-card class="mt-2 border border-secondary" width="400" rounded="lg">
                        <v-card-text class="pa-6 mt-5">

                            <v-row>
                                <v-col cols="auto">
                                    <v-avatar size="70" class="mr-1"
                                        image="https://www.gravatar.com/avatar/297fe1c3f43c41b5dbdbb61d69e9aa54?s=380&d=wavatar"></v-avatar>
                                </v-col>
                                <v-col cols="auto">
                                    <p class="font-weight-bold text-h5">John Doe</p>
                                    <p class="font-weight-bold">Administrator</p>
                                    <p>john@janesbakery.com</p>
                                </v-col>
                            </v-row>

                            <v-divider class="mt-6 mb-2"></v-divider>

                            <v-row no-gutters>
                                <v-col>
                                    <v-switch label="Dark Mode" color="primary" @click="switchTheme" v-model="isDark"></v-switch>
                                </v-col>
                            </v-row>

                            <v-row no-gutters>
                                <v-col>
                                    <v-btn color="primary" class="rounded-xl" elevation="1" block>Logout</v-btn>
                                </v-col>
                            </v-row>


                        </v-card-text>
                    </v-card>
                </v-menu>

            </v-btn>
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
            <a href="https://github.com/TheWayneSwart/Prevue" target="_blank"> &copy; 1979 Prevue. All rights reserved.</a>
        </div>
    </v-footer>


</v-app></template>