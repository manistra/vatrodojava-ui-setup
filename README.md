# 🚨 Dojava 🚨

**Dojava** is a protocol-agnostic alarm monitoring platform for fire, flood, intrusion, and other event types.  
It ingests signals from alarm panels, tracks events, and structures them across organizations and monitored locations.

---

## 🧱 Core Structure

- **Organization** – Customer (e.g. company, department)
- **Account** – Monitored location (formerly _Location_)
- **Partition** – Independently armed/disarmed area within an Account
- **Zone** – Detection point (e.g. motion sensor in hallway)
- **Device** – Sensor assigned to a Zone
- **Panel** – Central alarm unit at the Account level

---

## ⚙️ Key Features

- Supports SIA DC-09, Contact ID, and other industry protocols
- Configurable onboarding for Organizations and Accounts
- Auto-creation of Zones/Devices from incoming signals
- Browser extension to ensure audio alarms are always heard
- Smart email notifications (grouping repeated signals)
- Role-based access (admin, user, finance/export)

---

## 🔔 Signal Flow

Receive → Parse → Map (Account → Partition → Zone) → Categorize → Notify

---
