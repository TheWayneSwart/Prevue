<script setup>
import { ref } from 'vue'
import TrendWidget from '@/components/dashboard/TrendWidget.vue'

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

<template>
    <v-container fluid>
        <!-- Dashboard Header -->
        <v-row>
            <v-col cols="12">
                <h1 class="text-h3 font-weight-bold">Trends</h1>
                <p class="text-light">Latest trends and insights</p>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" md="4">
                <TrendWidget elevation="2" title="New Clients" subtitle="This Month" value="4" icon="mdi-calendar-month" trend="12% from last month" trendColor="success" trendDirection="up" />
            </v-col>
            <v-col cols="12" md="4">
                <TrendWidget elevation="2" title="Total Profit" subtitle="Year 2025" value="14,850.00" icon="mdi-cash-multiple" trend="66% vs same period last year" trendColor="error" trendDirection="down" />
            </v-col>
            <v-col cols="12" md="4">
                <TrendWidget elevation="2" title="Down Time" subtitle="June 2025" value="6 Hours" icon="mdi-alert" trend="1.8% Below Standard" trendColor="warning" trendDirection="flat" />
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