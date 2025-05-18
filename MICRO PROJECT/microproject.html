<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smart Irrigation System</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <style>
        .gauge {
            width: 100%;
            max-width: 250px;
            font-family: "Roboto", sans-serif;
            font-size: 32px;
            color: #004033;
        }
        
        .gauge__body {
            width: 100%;
            height: 0;
            padding-bottom: 50%;
            position: relative;
            border-top-left-radius: 100% 200%;
            border-top-right-radius: 100% 200%;
            overflow: hidden;
            background-color: #f5f5f5;
        }
        
        .gauge__fill {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #4CAF50;
            transform-origin: center top;
            transform: rotate(0.5turn);
            transition: transform 0.2s ease-out;
        }
        
        .gauge__cover {
            width: 75%;
            height: 150%;
            background: white;
            border-radius: 50%;
            position: absolute;
            top: 25%;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            align-items: center;
            justify-content: center;
            padding-bottom: 25%;
            box-sizing: border-box;
        }
        
        .gauge-value {
            font-size: 1.5rem;
            font-weight: bold;
        }
        
        .pump-active {
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% {
                box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.7);
            }
            70% {
                box-shadow: 0 0 0 10px rgba(74, 222, 128, 0);
            }
            100% {
                box-shadow: 0 0 0 0 rgba(74, 222, 128, 0);
            }
        }
        
        .notification-badge {
            position: absolute;
            top: -5px;
            right: -5px;
            width: 20px;
            height: 20px;
            background-color: red;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
        }

        /* Loading spinner */
        .spinner {
            animation: spin 1s linear infinite;
            display: inline-block;
        }

        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    </style>
</head>
<body class="bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-green-800 text-white shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <i class="fas fa-tint text-2xl"></i>
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-4">
                            <a href="#" class="px-3 py-2 rounded-md text-sm font-medium bg-green-900">Dashboard</a>
                            <a href="#settings" class="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700">Settings</a>
                            <a href="#history" class="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700">History</a>
                            <a href="#alerts" class="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 relative">
                                Alerts
                                <span id="alertCount" class="notification-badge hidden">0</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="hidden md:block">
                    <div class="ml-4 flex items-center md:ml-6">
                        <button class="p-1 rounded-full text-green-200 hover:text-white focus:outline-none">
                            <span class="sr-only">View notifications</span>
                            <i class="fas fa-bell"></i>
                        </button>
                        <div class="ml-3 relative">
                            <div>
                                <button class="max-w-xs flex items-center text-sm rounded-full focus:outline-none">
                                    <span class="sr-only">Open user menu</span>
                                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="-mr-2 flex md:hidden">
                    <button class="inline-flex items-center justify-center p-2 rounded-md text-green-200 hover:text-white hover:bg-green-700 focus:outline-none">
                        <span class="sr-only">Open main menu</span>
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex justify-between items-center mb-8">
            <h1 class="text-3xl font-bold text-gray-900">Smart Irrigation Dashboard</h1>
            <div class="flex items-center space-x-2">
                <span class="text-sm text-gray-600">Last updated: <span id="lastUpdated">Just now</span></span>
                <button id="refreshBtn" class="p-2 rounded-full bg-green-100 text-green-800 hover:bg-green-200">
                    <i class="fas fa-sync-alt"></i>
                </button>
            </div>
        </div>

        <!-- Status Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div class="bg-white rounded-lg shadow p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm font-medium text-gray-500">Soil Moisture</p>
                        <div class="mt-2 flex items-center">
                            <p class="text-3xl font-semibold text-gray-900"><span id="soilMoistureValue">0</span>%</p>
                            <span id="soilMoistureStatus" class="ml-2 px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Optimal</span>
                        </div>
                    </div>
                    <div class="gauge">
                        <div class="gauge__body">
                            <div class="gauge__fill" id="soilMoistureGauge"></div>
                            <div class="gauge__cover">
                                <span class="gauge-value"><span id="soilMoistureGaugeValue">0</span>%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-lg shadow p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm font-medium text-gray-500">Temperature</p>
                        <div class="mt-2 flex items-center">
                            <p class="text-3xl font-semibold text-gray-900"><span id="temperatureValue">0</span>°C</p>
                            <span id="temperatureStatus" class="ml-2 px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">Normal</span>
                        </div>
                    </div>
                    <div class="text-5xl text-blue-500">
                        <i class="fas fa-temperature-high"></i>
                    </div>
                </div>
                <div class="mt-4">
                    <div class="w-full bg-gray-200 rounded-full h-2.5">
                        <div id="temperatureBar" class="bg-blue-600 h-2.5 rounded-full" style="width: 0%"></div>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-lg shadow p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm font-medium text-gray-500">Humidity</p>
                        <div class="mt-2 flex items-center">
                            <p class="text-3xl font-semibold text-gray-900"><span id="humidityValue">0</span>%</p>
                            <span id="humidityStatus" class="ml-2 px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800">Normal</span>
                        </div>
                    </div>
                    <div class="text-5xl text-purple-500">
                        <i class="fas fa-tint"></i>
                    </div>
                </div>
                <div class="mt-4">
                    <div class="w-full bg-gray-200 rounded-full h-2.5">
                        <div id="humidityBar" class="bg-purple-600 h-2.5 rounded-full" style="width: 0%"></div>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-lg shadow p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm font-medium text-gray-500">Pump Status</p>
                        <div class="mt-2 flex items-center">
                            <p id="pumpStatusText" class="text-3xl font-semibold text-gray-900">OFF</p>
                            <span id="pumpStatusBadge" class="ml-2 px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">Inactive</span>
                        </div>
                    </div>
                    <div id="pumpStatusIcon" class="text-5xl text-red-500">
                        <i class="fas fa-power-off"></i>
                    </div>
                </div>
                <div class="mt-4">
                    <button id="togglePumpBtn" class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                        Turn Pump ON
                    </button>
                </div>
            </div>
        </div>

        <!-- Charts Section -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div class="bg-white rounded-lg shadow p-6">
                <h2 class="text-lg font-medium text-gray-900 mb-4">Soil Moisture History</h2>
                <canvas id="moistureChart" height="250"></canvas>
            </div>
            <div class="bg-white rounded-lg shadow p-6">
                <h2 class="text-lg font-medium text-gray-900 mb-4">Temperature & Humidity</h2>
                <canvas id="tempHumidityChart" height="250"></canvas>
            </div>
        </div>

        <!-- Control Panel -->
        <div class="bg-white rounded-lg shadow p-6 mb-8" id="settings">
            <h2 class="text-lg font-medium text-gray-900 mb-4">Irrigation Settings</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label for="moistureThreshold" class="block text-sm font-medium text-gray-700">Soil Moisture Threshold (%)</label>
                    <input type="range" min="0" max="100" value="30" class="mt-1 w-full" id="moistureThreshold">
                    <div class="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0%</span>
                        <span id="thresholdValue">30%</span>
                        <span>100%</span>
                    </div>
                    <p class="mt-2 text-sm text-gray-500">When soil moisture falls below this value, the pump will automatically activate.</p>
                </div>
                <div>
                    <label for="irrigationDuration" class="block text-sm font-medium text-gray-700">Irrigation Duration (minutes)</label>
                    <input type="range" min="1" max="30" value="5" class="mt-1 w-full" id="irrigationDuration">
                    <div class="flex justify-between text-xs text-gray-500 mt-1">
                        <span>1 min</span>
                        <span id="durationValue">5 min</span>
                        <span>30 min</span>
                    </div>
                    <p class="mt-2 text-sm text-gray-500">How long the pump should run when activated automatically.</p>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700">System Mode</label>
                    <div class="mt-2 space-y-2">
                        <div class="flex items-center">
                            <input id="auto-mode" name="system-mode" type="radio" checked class="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300">
                            <label for="auto-mode" class="ml-3 block text-sm font-medium text-gray-700">Automatic</label>
                        </div>
                        <div class="flex items-center">
                            <input id="manual-mode" name="system-mode" type="radio" class="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300">
                            <label for="manual-mode" class="ml-3 block text-sm font-medium text-gray-700">Manual</label>
                        </div>
                    </div>
                    <p class="mt-2 text-sm text-gray-500">In manual mode, the system won't activate the pump automatically.</p>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700">Notifications</label>
                    <div class="mt-2 space-y-2">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="email-notifications" name="notifications" type="checkbox" checked class="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded">
                            </div>
                            <label for="email-notifications" class="ml-3 text-sm font-medium text-gray-700">Email Alerts</label>
                        </div>
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="push-notifications" name="notifications" type="checkbox" checked class="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded">
                            </div>
                            <label for="push-notifications" class="ml-3 text-sm font-medium text-gray-700">Push Notifications</label>
                        </div>
                    </div>
                    <button id="saveSettingsBtn" class="mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                        Save Settings
                    </button>
                </div>
            </div>
        </div>

        <!-- History Log -->
        <div class="bg-white rounded-lg shadow p-6" id="history">
            <h2 class="text-lg font-medium text-gray-900 mb-4">System Activity Log</h2>
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                        </tr>
                    </thead>
                    <tbody id="activityLog" class="bg-white divide-y divide-gray-200">
                        <!-- Log entries will be added here by JavaScript -->
                    </tbody>
                </table>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="bg-green-800 text-white py-6">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="flex items-center space-x-2 mb-4 md:mb-0">
                    <i class="fas fa-tint text-2xl"></i>
                    <span class="text-lg font-semibold">Smart Irrigation System</span>
                </div>
                <div class="flex space-x-6">
                    <a href="#" class="hover:text-green-200">Privacy Policy</a>
                    <a href="#" class="hover:text-green-200">Terms of Service</a>
                    <a href="#" class="hover:text-green-200">Contact</a>
                </div>
            </div>
            <div class="mt-4 text-center md:text-left text-sm text-green-200">
                <p>© 2023 Smart Irrigation System. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script>
        // ==============================================
        // BACKEND SIMULATION (In a real app, this would be a separate server)
        // ==============================================

        // Database simulation
        const db = {
            settings: {
                moistureThreshold: 30,
                irrigationDuration: 5,
                systemMode: 'auto',
                emailNotifications: true,
                pushNotifications: true
            },
            sensorData: [],
            activityLog: [],
            pumpStatus: false,
            alerts: []
        };

        // Generate initial sensor data
        function generateInitialSensorData() {
            const now = new Date();
            const data = [];
            
            for (let i = 24; i >= 0; i--) {
                const timestamp = new Date(now.getTime() - (i * 60 * 60 * 1000));
                const moisture = Math.max(0, Math.min(100, 35 + Math.sin(timestamp.getHours() * 0.5) * 20 + (Math.random() * 5 - 2.5)));
                const temp = 20 + Math.sin(timestamp.getHours() * 0.3) * 10 + (Math.random() * 2 - 1);
                const humidity = 50 + Math.sin(timestamp.getHours() * 0.4) * 20 + (Math.random() * 5 - 2.5);
                
                data.push({
                    timestamp: timestamp.toISOString(),
                    soilMoisture: parseFloat(moisture.toFixed(1)),
                    temperature: parseFloat(temp.toFixed(1)),
                    humidity: parseFloat(humidity.toFixed(1))
                });
            }
            
            db.sensorData = data;
        }

        // Generate initial activity log
        function generateInitialActivityLog() {
            const now = new Date();
            const events = [
                { event: "System Startup", details: "Smart irrigation system initialized" },
                { event: "Sensor Reading", details: "Initial sensor readings collected" },
                { event: "Settings Updated", details: "Default settings applied" },
                { event: "Pump Activity", details: "Pump automatically activated due to low soil moisture" },
                { event: "Pump Activity", details: "Pump automatically deactivated after irrigation cycle" }
            ];
            
            events.forEach((event, index) => {
                const timestamp = new Date(now.getTime() - ((events.length - index) * 30 * 60 * 1000));
                db.activityLog.push({
                    timestamp: timestamp.toISOString(),
                    event: event.event,
                    details: event.details
                });
            });
        }

        // Generate initial alerts
        function generateInitialAlerts() {
            const now = new Date();
            db.alerts = [
                {
                    id: 1,
                    timestamp: new Date(now.getTime() - 2 * 60 * 60 * 1000).toISOString(),
                    type: "warning",
                    message: "Soil moisture level dropped below threshold",
                    read: false
                },
                {
                    id: 2,
                    timestamp: new Date(now.getTime() - 4 * 60 * 60 * 1000).toISOString(),
                    type: "info",
                    message: "System settings updated",
                    read: false
                }
            ];
        }

        // Initialize database
        generateInitialSensorData();
        generateInitialActivityLog();
        generateInitialAlerts();

        // API simulation
        const api = {
            getSensorData: () => {
                // Simulate real sensor data with some randomness
                const now = new Date();
                const moisture = Math.max(0, Math.min(100, 35 + Math.sin(now.getHours() * 0.5) * 20 + (Math.random() * 5 - 2.5)));
                const temp = 20 + Math.sin(now.getHours() * 0.3) * 10 + (Math.random() * 2 - 1);
                const humidity = 50 + Math.sin(now.getHours() * 0.4) * 20 + (Math.random() * 5 - 2.5);
                
                const newData = {
                    timestamp: now.toISOString(),
                    soilMoisture: parseFloat(moisture.toFixed(1)),
                    temperature: parseFloat(temp.toFixed(1)),
                    humidity: parseFloat(humidity.toFixed(1))
                };
                
                // Add to database
                db.sensorData.push(newData);
                if (db.sensorData.length > 25) {
                    db.sensorData.shift();
                }
                
                // Check if pump should be activated automatically
                if (db.settings.systemMode === 'auto' && 
                    newData.soilMoisture < db.settings.moistureThreshold && 
                    !db.pumpStatus) {
                    api.activatePump();
                    
                    // Add to activity log
                    db.activityLog.push({
                        timestamp: now.toISOString(),
                        event: "Pump Activity",
                        details: `Pump automatically activated due to low soil moisture (${newData.soilMoisture}% < ${db.settings.moistureThreshold}%)`
                    });
                    
                    // Add alert
                    db.alerts.push({
                        id: db.alerts.length + 1,
                        timestamp: now.toISOString(),
                        type: "warning",
                        message: `Pump activated automatically - soil moisture ${newData.soilMoisture}%`,
                        read: false
                    });
                }
                
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve({
                            current: newData,
                            history: db.sensorData
                        });
                    }, 300); // Simulate network delay
                });
            },
            
            getSettings: () => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve(db.settings);
                    }, 200);
                });
            },
            
            updateSettings: (newSettings) => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        db.settings = {
                            ...db.settings,
                            ...newSettings
                        };
                        
                        // Add to activity log
                        db.activityLog.push({
                            timestamp: new Date().toISOString(),
                            event: "Settings Updated",
                            details: "System settings modified"
                        });
                        
                        resolve(db.settings);
                    }, 300);
                });
            },
            
            getPumpStatus: () => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve(db.pumpStatus);
                    }, 100);
                });
            },
            
            activatePump: () => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        db.pumpStatus = true;
                        
                        // Automatically deactivate after duration
                        setTimeout(() => {
                            db.pumpStatus = false;
                            
                            // Add to activity log
                            db.activityLog.push({
                                timestamp: new Date().toISOString(),
                                event: "Pump Activity",
                                details: `Pump automatically deactivated after ${db.settings.irrigationDuration} minutes`
                            });
                            
                            // Update UI if anyone is listening
                            updatePumpStatusUI(false);
                        }, db.settings.irrigationDuration * 60 * 1000);
                        
                        resolve(true);
                    }, 200);
                });
            },
            
            deactivatePump: () => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        db.pumpStatus = false;
                        resolve(true);
                    }, 200);
                });
            },
            
            togglePump: () => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        db.pumpStatus = !db.pumpStatus;
                        
                        // Add to activity log
                        db.activityLog.push({
                            timestamp: new Date().toISOString(),
                            event: "Pump Activity",
                            details: `Pump manually ${db.pumpStatus ? 'activated' : 'deactivated'}`
                        });
                        
                        resolve(db.pumpStatus);
                    }, 200);
                });
            },
            
            getActivityLog: () => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve(db.activityLog.slice().reverse()); // Return newest first
                    }, 200);
                });
            },
            
            getAlerts: () => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve(db.alerts.filter(alert => !alert.read));
                    }, 200);
                });
            },
            
            markAlertAsRead: (alertId) => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        const alert = db.alerts.find(a => a.id === alertId);
                        if (alert) {
                            alert.read = true;
                        }
                        resolve(true);
                    }, 200);
                });
            }
        };

        // ==============================================
        // FRONTEND APPLICATION
        // ==============================================

        // DOM Elements
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
            autoMode: document.getElementById('auto-mode'),
            manualMode: document.getElementById('manual-mode'),
            emailNotifications: document.getElementById('email-notifications'),
            pushNotifications: document.getElementById('push-notifications'),
            saveSettingsBtn: document.getElementById('saveSettingsBtn'),
            activityLog: document.getElementById('activityLog'),
            lastUpdated: document.getElementById('lastUpdated'),
            refreshBtn: document.getElementById('refreshBtn'),
            alertCount: document.getElementById('alertCount')
        };

        // Charts
        let moistureChart;
        let tempHumidityChart;

        // Initialize the application
        function init() {
            // Set up event listeners
            setupEventListeners();
            
            // Load initial data
            loadData();
            
            // Set up auto-refresh every 30 seconds
            setInterval(loadData, 30000);
        }

        // Set up event listeners
        function setupEventListeners() {
            // Toggle pump button
            elements.togglePumpBtn.addEventListener('click', togglePump);
            
            // Settings sliders
            elements.moistureThreshold.addEventListener('input', () => {
                elements.thresholdValue.textContent = `${elements.moistureThreshold.value}%`;
            });
            
            elements.irrigationDuration.addEventListener('input', () => {
                elements.durationValue.textContent = `${elements.irrigationDuration.value} min`;
            });
            
            // Save settings button
            elements.saveSettingsBtn.addEventListener('click', saveSettings);
            
            // Refresh button
            elements.refreshBtn.addEventListener('click', () => {
                elements.refreshBtn.innerHTML = '<i class="fas fa-sync-alt spinner"></i>';
                loadData();
            });
        }

        // Load all data
        function loadData() {
            // Get current sensor data
            api.getSensorData().then(data => {
                updateSensorUI(data.current);
                updateCharts(data.history);
                updateLastUpdated();
                
                // Get pump status
                api.getPumpStatus().then(status => {
                    updatePumpStatusUI(status);
                });
                
                // Get activity log
                api.getActivityLog().then(logs => {
                    updateActivityLogUI(logs);
                });
                
                // Get alerts
                api.getAlerts().then(alerts => {
                    updateAlertsUI(alerts);
                });
                
                // Reset refresh button
                elements.refreshBtn.innerHTML = '<i class="fas fa-sync-alt"></i>';
            });
            
            // Load settings
            api.getSettings().then(settings => {
                updateSettingsUI(settings);
            });
        }

        // Update sensor UI
        function updateSensorUI(data) {
            // Soil moisture
            const moisture = data.soilMoisture;
            elements.soilMoistureValue.textContent = moisture;
            elements.soilMoistureGaugeValue.textContent = moisture;
            elements.soilMoistureGauge.style.transform = `rotate(${moisture / 100 * 0.5}turn)`;
            
            if (moisture < 20) {
                elements.soilMoistureStatus.textContent = "Critical";
                elements.soilMoistureStatus.className = "ml-2 px-2 py-1 text-xs rounded-full bg-red-100 text-red-800";
                elements.soilMoistureGauge.style.backgroundColor = "#ef4444";
            } else if (moisture < 30) {
                elements.soilMoistureStatus.textContent = "Low";
                elements.soilMoistureStatus.className = "ml-2 px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800";
                elements.soilMoistureGauge.style.backgroundColor = "#f59e0b";
            } else if (moisture > 80) {
                elements.soilMoistureStatus.textContent = "High";
                elements.soilMoistureStatus.className = "ml-2 px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800";
                elements.soilMoistureGauge.style.backgroundColor = "#3b82f6";
            } else {
                elements.soilMoistureStatus.textContent = "Optimal";
                elements.soilMoistureStatus.className = "ml-2 px-2 py-1 text-xs rounded-full bg-green-100 text-green-800";
                elements.soilMoistureGauge.style.backgroundColor = "#4CAF50";
            }
            
            // Temperature
            const temp = data.temperature;
            elements.temperatureValue.textContent = temp;
            elements.temperatureBar.style.width = `${Math.min(100, temp * 3)}%`;
            
            if (temp < 10) {
                elements.temperatureStatus.textContent = "Cold";
                elements.temperatureStatus.className = "ml-2 px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800";
                elements.temperatureBar.style.backgroundColor = "#3b82f6";
            } else if (temp > 30) {
                elements.temperatureStatus.textContent = "Hot";
                elements.temperatureStatus.className = "ml-2 px-2 py-1 text-xs rounded-full bg-red-100 text-red-800";
                elements.temperatureBar.style.backgroundColor = "#ef4444";
            } else {
                elements.temperatureStatus.textContent = "Normal";
                elements.temperatureStatus.className = "ml-2 px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800";
                elements.temperatureBar.style.backgroundColor = "#3b82f6";
            }
            
            // Humidity
            const humidity = data.humidity;
            elements.humidityValue.textContent = humidity;
            elements.humidityBar.style.width = `${
</html>
