<template>
    <v-container fluid>
        <!-- Dashboard Header -->
        <v-row class="mb-2">
            <v-col cols="12">
                <h1 class="text-h3 font-weight-bold">Dashboard</h1>
                <p class="text-light">Administrative overview of your organization</p>
            </v-col>
        </v-row>

        <!-- Metrics Cards -->
        <v-row>
            <!-- New Enrollments This Month -->
            <v-col cols="12" md="4">
                <v-card class="dashboard-card" elevation="3" rounded="lg">
                    <v-card-text class="pa-6">
                        <div class="d-flex align-center justify-space-between mb-4">
                            <div>
                                <p class="text-caption mb-1">New Enrollments</p>
                                <h2 class="text-h3 font-weight-bold text-primary">{{ monthlyEnrollments }}</h2>
                                <p class="text-body-2">This Month</p>
                            </div>
                            <v-icon size="70" color="light">mdi-calendar-month</v-icon>
                        </div>
                        <v-divider class="mb-3"></v-divider>
                        <div class="d-flex align-center">
                            <v-icon color="success" size="20" class="me-2">mdi-trending-up</v-icon>
                            <span class="text-body-2 text-success">+12% from last month</span>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>

            <!-- New Enrollments This Year -->
            <v-col cols="12" md="4">
                <v-card class="dashboard-card" elevation="3" rounded="lg">
                    <v-card-text class="pa-6">
                        <div class="d-flex align-center justify-space-between mb-4">
                            <div>
                                <p class="text-caption text-medium-emphasis mb-1">New Enrollments</p>
                                <h2 class="text-h3 font-weight-bold text-primary">{{ yearlyEnrollments }}</h2>
                                <p class="text-body-2 text-medium-emphasis">This Year</p>
                            </div>
                            <v-icon size="70" color="light">mdi-calendar</v-icon>
                        </div>
                        <v-divider class="mb-3"></v-divider>
                        <div class="d-flex align-center">
                            <v-icon color="success" size="20" class="me-2">mdi-trending-up</v-icon>
                            <span class="text-body-2 text-success">+8% from last year</span>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>

            <!-- Total Students -->
            <v-col cols="12" md="4">
                <v-card class="dashboard-card" elevation="3" rounded="lg">
                    <v-card-text class="pa-6">
                        <div class="d-flex align-center justify-space-between mb-4">
                            <div>
                                <p class="text-caption text-medium-emphasis mb-1">Total Students</p>
                                <h2 class="text-h3 font-weight-bold text-primary">{{ totalStudents }}</h2>
                                <p class="text-body-2 text-medium-emphasis">All Time</p>
                            </div>
                            <v-icon size="70" color="light">mdi-account-group</v-icon>
                        </div>
                        <v-divider class="mb-3"></v-divider>
                        <div class="d-flex align-center">
                            <v-icon size="20" class="me-2" color="light">mdi-account-check</v-icon>
                            <span class="text-light">{{ activeStudents }} active students</span>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <!-- Additional Dashboard Content -->
        <v-row class="mt-6">
            <v-col cols="12" md="8">
                <v-card elevation="3" rounded="lg">
                    <v-card-title class="text-h5 font-weight-bold pa-6 pb-4">
                        <v-icon class="me-3" color="primary">mdi-chart-line</v-icon>
                        Enrollment Trends
                    </v-card-title>
                    <v-card-text class="pa-6 pt-0">
                        <div class="text-center py-8">
                            <v-icon size="64" color="secondary" class="mb-4">mdi-chart-line</v-icon>
                            <p class="text-body-1 text-medium-emphasis">Chart visualization will be implemented here</p>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" md="4">
                <v-card elevation="3" rounded="lg">
                    <v-card-title class="text-h5 font-weight-bold pa-6 pb-4">
                        <v-icon class="me-3" color="primary">mdi-clock-outline</v-icon>
                        Recent Activity
                    </v-card-title>
                    <v-card-text class="pa-6 pt-0">
                        <v-list density="compact">
                            <v-list-item v-for="(activity, index) in recentActivities" :key="index" class="px-0">
                                <template v-slot:prepend>
                                    <v-avatar size="32" :color="activity.color" class="me-3">
                                        <v-icon size="16" color="white">{{ activity.icon }}</v-icon>
                                    </v-avatar>
                                </template>
                                <v-list-item-title class="text-body-2">{{ activity.title }}</v-list-item-title>
                                <v-list-item-subtitle class="text-caption">{{ activity.time }}</v-list-item-subtitle>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref } from 'vue'

// Dashboard data
const monthlyEnrollments = ref(4)
const yearlyEnrollments = ref(12)
const totalStudents = ref(671)
const activeStudents = ref(14)

// Recent activities data
const recentActivities = ref([
    {
        title: 'New student enrolled',
        time: '2 minutes ago',
        icon: 'mdi-account-plus',
        color: 'success'
    },
    {
        title: 'Course completion',
        time: '15 minutes ago',
        icon: 'mdi-certificate',
        color: 'primary'
    },
    {
        title: 'Payment received',
        time: '1 hour ago',
        icon: 'mdi-credit-card',
        color: 'info'
    },
    {
        title: 'Support ticket opened',
        time: '2 hours ago',
        icon: 'mdi-help-circle',
        color: 'warning'
    }
])
</script>

<style scoped>
.dashboard-card {
    transition: transform 0.2s ease-in-out;
}

.dashboard-card:hover {
    transform: translateY(-8px);
}
</style>