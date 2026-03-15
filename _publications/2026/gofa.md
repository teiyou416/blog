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
Vertical federated learning (VFL) allows multiple organizations with disjoint feature spaces and overlapping sample identities to
collaboratively train machine learning models while keeping local data.
Despite its privacy-preserving design, recent studies have shown that
VFL is vulnerable to backdoor attacks. In particular, a malicious passive
party can inject carefully crafted trigger into its local inputs or intermediate embeddings, causing the global model to produce targeted mispredictions at inference time. Existing backdoor attack against backdoor
attacks in VFL (e.g. BadVFL) rely on the assumptions that the malicious
client can obtain addition knowledge about task labels, which contradicts
the core privacy assumptions of VFL. In this paper, we propose GOFA,
a new backdoor attack method for VFL scenarios. Gofa use the gradient feedback from the server to construct poisonsd dataset and employs
adversarial example attack(e.g. FGSM) for masking original feature of
the data to enhance trigger learning. We use CIFAR10 and UCIHAR
dataset for experiments. Our experiments demonstrate the effectiveness
of out method in various settings. 
#cover:          /assets/images/covers/cover3.jpg
cover:          /assets/images/covers/gofa_update.png
authors:
  - Ye CHENG, Adachi Naotoshi
links:
  #Code: https://github.com/luost26/academic-homepage
---
