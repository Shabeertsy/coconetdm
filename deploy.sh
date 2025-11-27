#!/bin/bash

# Coconet Firebase Deployment Script
# This script will help you deploy your website to Firebase

echo "🚀 Coconet Firebase Deployment"
echo "================================"
echo ""

# Step 1: Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null
then
    echo "❌ Firebase CLI not found. Installing..."
    sudo npm install -g firebase-tools
    if [ $? -ne 0 ]; then
        echo "❌ Installation failed. Please run manually:"
        echo "   sudo npm install -g firebase-tools"
        exit 1
    fi
    echo "✅ Firebase CLI installed successfully"
else
    echo "✅ Firebase CLI already installed"
fi

echo ""

# Step 2: Login to Firebase
echo "🔐 Logging in to Firebase..."
firebase login

if [ $? -ne 0 ]; then
    echo "❌ Login failed. Please try again."
    exit 1
fi

echo "✅ Logged in successfully"
echo ""

# Step 3: Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please check for errors."
    exit 1
fi

echo "✅ Build completed successfully"
echo ""

# Step 4: Initialize Firebase (if not already done)
if [ ! -f ".firebaserc" ]; then
    echo "🔧 Initializing Firebase project..."
    firebase init hosting
else
    echo "✅ Firebase already initialized"
fi

echo ""

# Step 5: Deploy
echo "🚀 Deploying to Firebase..."
firebase deploy

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Deployment successful!"
    echo "🌐 Your website is now live!"
    echo ""
    firebase hosting:channel:list
else
    echo "❌ Deployment failed. Please check the errors above."
    exit 1
fi
