<script setup>

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: false,
    },
    value: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    elevation: {
        type: String,
        required: false,
    },
    trend: {
        type: String,
        required: false,
    },    
    trendColor: {
        type: String,
        required: false,
    },
    trendDirection: {
        type: String,
        required: false,
    },
});

</script>

<template>
    <v-card class="dashboard-card" :elevation="elevation" rounded="lg">
        <v-card-text class="pa-6">
            <div class="d-flex align-center justify-space-between mb-4">
                <div>
                    <p class="font-weight-bold mb-1">{{ title }}</p>
                    <h2 class="text-h3 font-weight-bold text-primary">{{ value }}</h2>
                    <p class="text-caption">{{ subtitle }}</p>
                </div>
                <v-icon size="50" color="light">{{ icon }}</v-icon>
            </div>

            <div v-if="trend">
                <v-divider class="mb-3"></v-divider>
                <div class="d-flex align-center">
                    <v-icon :color="trendColor" size="20" class="me-2">
                        {{ trendDirection === 'up' ? 'mdi-trending-up' : trendDirection === 'down' ? 'mdi-trending-down' : trendDirection === 'flat' ? 'mdi-trending-neutral' : 'mdi-trending-up' }}
                    </v-icon>
                    <span :class="`text-body-2 text-${trendColor}`">{{ trend }}</span>
                </div>
            </div>
        </v-card-text>
    </v-card>
</template>

<style scoped>
.dashboard-card {
    transition: transform 0.2s ease-in-out;
}

.dashboard-card:hover {
    transform: translateY(-8px);
}
</style>