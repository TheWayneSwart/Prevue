<script setup>

</script>

<template>
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
</template>