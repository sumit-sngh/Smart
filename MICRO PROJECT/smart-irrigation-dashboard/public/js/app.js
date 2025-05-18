// This file contains the JavaScript code for the application. It handles user interactions, fetches data from the server, and updates the UI dynamically.

document.addEventListener('DOMContentLoaded', () => {
    const elements = {
        soilMoistureValue: document.getElementById('soilMoistureValue'),
        soilMoistureGauge: document.getElementById('soilMoistureGauge'),
        soilMoistureGaugeValue: document.getElementById('soilMoistureGaugeValue'),
        soilMoistureStatus: document.getElementById('soilMoistureStatus'),
        temperatureValue: document.getElementById('temperatureValue'),
        temperatureBar: document.getElementById('temperatureBar'),
        temperatureStatus: document.getElementById('temperatureStatus'),
        humidityValue: document.getElementById('humidityValue'),
        humidityBar: document.getElementById('humidityBar'),
        humidityStatus: document.getElementById('humidityStatus'),
        pumpStatusText: document.getElementById('pumpStatusText'),
        pumpStatusBadge: document.getElementById('pumpStatusBadge'),
        pumpStatusIcon: document.getElementById('pumpStatusIcon'),
        togglePumpBtn: document.getElementById('togglePumpBtn'),
        moistureThreshold: document.getElementById('moistureThreshold'),
        thresholdValue: document.getElementById('thresholdValue'),
        irrigationDuration: document.getElementById('irrigationDuration'),
        durationValue: document.getElementById('durationValue'),
        saveSettingsBtn: document.getElementById('saveSettingsBtn'),
        activityLog: document.getElementById('activityLog'),
        lastUpdated: document.getElementById('lastUpdated'),
        refreshBtn: document.getElementById('refreshBtn'),
        alertCount: document.getElementById('alertCount')
    };

    const api = {
        getSensorData: async () => {
            const response = await fetch('/api/sensor-data');
            return response.json();
        },
        getSettings: async () => {
            const response = await fetch('/api/settings');
            return response.json();
        },
        updateSettings: async (newSettings) => {
            await fetch('/api/settings', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newSettings)
            });
        },
        getActivityLog: async () => {
            const response = await fetch('/api/activity-log');
            return response.json();
        },
        getAlerts: async () => {
            const response = await fetch('/api/alerts');
            return response.json();
        },
        togglePump: async () => {
            await fetch('/api/pump/toggle', { method: 'POST' });
        }
    };

    const updateSensorUI = (data) => {
        const moisture = data.soilMoisture;
        elements.soilMoistureValue.textContent = moisture;
        elements.soilMoistureGaugeValue.textContent = moisture;
        elements.soilMoistureGauge.style.transform = `rotate(${moisture / 100 * 0.5}turn)`;

        if (moisture < 20) {
            elements.soilMoistureStatus.textContent = "Critical";
            elements.soilMoistureStatus.className = "status-critical";
        } else if (moisture < 30) {
            elements.soilMoistureStatus.textContent = "Low";
            elements.soilMoistureStatus.className = "status-low";
        } else {
            elements.soilMoistureStatus.textContent = "Optimal";
            elements.soilMoistureStatus.className = "status-optimal";
        }

        const temp = data.temperature;
        elements.temperatureValue.textContent = temp;
        elements.temperatureBar.style.width = `${Math.min(100, temp * 3)}%`;

        if (temp < 10) {
            elements.temperatureStatus.textContent = "Cold";
            elements.temperatureStatus.className = "status-cold";
        } else if (temp > 30) {
            elements.temperatureStatus.textContent = "Hot";
            elements.temperatureStatus.className = "status-hot";
        } else {
            elements.temperatureStatus.textContent = "Normal";
            elements.temperatureStatus.className = "status-normal";
        }

        const humidity = data.humidity;
        elements.humidityValue.textContent = humidity;
        elements.humidityBar.style.width = `${humidity}%`;
    };

    const loadData = async () => {
        const data = await api.getSensorData();
        updateSensorUI(data);
    };

    elements.togglePumpBtn.addEventListener('click', async () => {
        await api.togglePump();
        loadData();
    });

    elements.saveSettingsBtn.addEventListener('click', async () => {
        const newSettings = {
            moistureThreshold: elements.moistureThreshold.value,
            irrigationDuration: elements.irrigationDuration.value
        };
        await api.updateSettings(newSettings);
    });

    loadData();
    setInterval(loadData, 30000);
});