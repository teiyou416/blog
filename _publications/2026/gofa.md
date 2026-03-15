---
title:          "GOFA: Gradient-Oriented Backdoor Attack in Vertical Federated Learning"
date:           2026-02-24 00:01:00 +0800
selected:       true
pub:            "International Conference on Electrial Computer and Energy Technologies"
# pub_pre:        "Submitted to "
# pub_post:       'Under review.'
pub_last:       ' <span class="badge badge-pill badge-publication badge-success">ICECET2026</span>'
pub_date:       "2026"
#semantic_scholar_id: 204e3073870fae3d05bcbc2f6a8e263d9b72e776  # use this to retrieve citation count
abstract: >- 
Vertical federated learning (VFL) enables multiple organizations with disjoint feature spaces and overlapping sample identities to collaboratively train machine learning models without sharing raw local data. Despite this privacy-preserving paradigm, VFL remains vulnerable to backdoor attacks. In particular, a malicious passive party can inject carefully crafted triggers into local inputs or intermediate embeddings, causing targeted mispredictions during inference. Existing VFL backdoor attacks (e.g., BadVFL) typically assume that the malicious client has additional knowledge of task labels, which conflicts with the core privacy assumptions of VFL. In this paper, we propose GOFA, a gradient-oriented backdoor attack for VFL. GOFA leverages server-provided gradient feedback to construct a poisoned dataset and applies adversarial-example techniques (e.g., FGSM) to mask original features and strengthen trigger learning. Experiments on CIFAR-10 and UCI-HAR demonstrate the effectiveness of our method across multiple settings.
#cover:          /assets/images/covers/cover3.jpg
cover:          /assets/images/covers/gofa_update.png
authors:
  - Ye CHENG, Adachi Naotoshi
links:
  #Code: https://github.com/luost26/academic-homepage
---
