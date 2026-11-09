window.techNewsLastUpdated = "2026-11-09 07:00:10 +0000";
window.techNewsItems = [
  {
    "title": "Enhancing Academic Advisement with Case-Based Reasoning",
    "link": "https://arxiv.org/abs/2611.08572",
    "description": "arXiv:2611.08572v1 Announce Type: new Abstract: This research involved the study of an application of Case-Based Reasoning (CBR) in the field of academic advising. Academic advisement has been recognised as an important function of higher education. However, there is a widespread desire to improve the advisement services provided by many educational institutions (e.g., colleges and universities) around the world. In the last ten years, CBR expert systems have made important contributions in many",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "NormGym: Evaluating Normative Competence through Social Interaction",
    "link": "https://arxiv.org/abs/2611.08613",
    "description": "arXiv:2611.08613v1 Announce Type: new Abstract: Normative competence, the ability to infer socially enforced expectations from interaction and adjust behavior accordingly, is essential for agents operating in unfamiliar human communities. Yet existing evaluations largely test whether agents can recognize or apply norms they may already know, rather than whether they can acquire previously unknown norms from social interaction. We introduce NormGym, an interactive benchmark for normative competen",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "LLM-Based Feature Extraction for Multi-Criteria Inventory Classification",
    "link": "https://arxiv.org/abs/2611.08626",
    "description": "arXiv:2611.08626v1 Announce Type: new Abstract: E-commerce supply chains generate large volumes of customer feedback and operational data that remain underutilized in inventory management. Traditional inventory classification techniques such as ABC analysis rely primarily on annual dollar usage, while multi-criteria inventory classification (MCIC) methods extend this but still depend on structured quantitative data and do not utilize unstructured information available in modern supply chains. Th",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Aspect-wise Pairwise Tournaments for Test-Time Selection",
    "link": "https://arxiv.org/abs/2611.08640",
    "description": "arXiv:2611.08640v1 Announce Type: new Abstract: Scaling test-time compute has proven highly effective at improving LLM reasoning. A popular method is best-of-n sampling, where a model generates many candidate solutions and one is selected. This motivates the question: how can we select the best candidate? When humans make choices, we find it more natural to compare two options than judge each in isolation. Additionally, when the options become complex, we like to judge the options one aspect at ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Decision Context: Persistent Behavioral Learning for AI Agents",
    "link": "https://arxiv.org/abs/2611.08644",
    "description": "arXiv:2611.08644v1 Announce Type: new Abstract: LLM agents do not learn from corrections across sessions. A user fixes the same mistake at the start of every conversation. Existing agent memory systems primarily handle facts, such as preferences, entities, and conversational history, rather than procedural knowledge. We present Forge Decision Context (forge_dc), a system that captures behavioral signals from human corrections and self-assessed tool-call failures, compiles them into imperative RU",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "IWIBench: Evaluating Gradient-Free Model Driven Intra-weight Injection",
    "link": "https://arxiv.org/abs/2611.08647",
    "description": "arXiv:2611.08647v1 Announce Type: new Abstract: Intra-weight injection lets one model change another model's behaviour by editing its weights directly, without gradients. Such edits can range from altering lexical associations to enforcing output formats or updating factual knowledge. Despite growing interest in these approaches, there has been no systematic way to evaluate how well models perform them. We introduce IWIBench, which measures a large editor model's ability to modify the weights of",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Pdb or Not to Be: Comparing Debugging Interfaces With Pass$_{X}$@$k$",
    "link": "https://arxiv.org/abs/2611.08666",
    "description": "arXiv:2611.08666v1 Announce Type: new Abstract: Interactive debuggers are indispensable to human software development, yet coding agents overwhelmingly rely on edit-execute-observe loops, using common bash tools, test scripts, and print statements to debug via repeated shell commands. Stepping through a debugger provides live access to runtime state, which may enable different problem-solving capabilities. However, prior work typically introduces the debugger as an additional tool or through a n",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "ChainFlow: Few-Step Latent Flow Matching for Speculative Decoding",
    "link": "https://arxiv.org/abs/2611.08669",
    "description": "arXiv:2611.08669v1 Announce Type: new Abstract: Speculative decoding has become a standard way to accelerate LLM inference: a lightweight drafter proposes tokens that the target verifies in one parallel pass. Existing drafters face trade-offs that limits their speedups: autoregressive drafters generate tokens one at a time, so drafting cost grows with draft length, while diffusion drafters generate tokens in parallel but predict each position independently, ignoring inter-token dependencies. We ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Transporting the Past: An Optimal Transport View of Backtracking Counterfactuals",
    "link": "https://arxiv.org/abs/2611.08682",
    "description": "arXiv:2611.08682v1 Announce Type: new Abstract: We study backtracking counterfactual inference for Structural Causal Models (SCMs) through the lens of optimal transport. In SCMs, a factual observation generally induces a posterior distribution over exogenous variables, making counterfactual inference inherently distributional. We introduce two complementary frameworks that transport this posterior onto the set of exogenous configurations satisfying a desired counterfactual query. The first const",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Cancellation Is Not Enough: What Retries Leave Behind in an Overloaded LLM Engine",
    "link": "https://arxiv.org/abs/2611.08684",
    "description": "arXiv:2611.08684v1 Announce Type: new Abstract: Clients and proxies in front of an LLM engine retry calls that time out. After a transient overload, these retries can keep the engine from recovering even when calls arrive below its capacity. Since the engine may keep computing for clients that have left, propagating cancellation looks like the natural remedy. In this paper, we test it on vLLM with overload experiments on three open models, and with scheduler traces of one that follow each client",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Memory-Aware Multi-Agent Architecture with LLM-based Orchestration for Conversational Recommendation",
    "link": "https://arxiv.org/abs/2611.08718",
    "description": "arXiv:2611.08718v1 Announce Type: new Abstract: Conversational recommender systems often treat user sessions in isolation, limiting their ability to capture how user intent evolves over time. While large language models (LLMs) have improved semantic understanding, they are typically used as isolated components, without addressing how memory, retrieval, and decision-making should be integrated at the system level. In this work, we propose a memory-aware multi-agent architecture for conversational",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "AlterNet: Adaptive-Depth Mixture-of-Experts with Learned Halting for Elastic Inference",
    "link": "https://arxiv.org/abs/2611.08741",
    "description": "arXiv:2611.08741v1 Announce Type: new Abstract: Most LLM architectures have fixed compute demands determined at training time. We propose a novel architecture that combines the Mixture-of-Experts architecture with shallow experts and a novel dynamic-depth system to make the extent of a forward pass dynamically adjustable. Our approach lets the model automatically determine the compute needed for a given task, paired with a system to scale it down after training without retraining when the execut",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "AttentionSwitch: Jailbreak Defense for LLMs via Joint Learning of Sparse Attention-Head Selection and Scaling",
    "link": "https://arxiv.org/abs/2611.08752",
    "description": "arXiv:2611.08752v1 Announce Type: new Abstract: Large language models have achieved remarkable performance across a wide range of tasks, yet they remain susceptible to jailbreak attacks that circumvent safety mechanisms and elicit harmful or unintended outputs. Although safety can be improved through model fine-tuning, such approaches can be computationally expensive and may degrade previously acquired capabilities through catastrophic forgetting. Recent jailbreak defenses have therefore explore",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Debate to Deceive: Poisoning LLM's Fact-Checking via Game-Theoretic Multi-Agent Debate",
    "link": "https://arxiv.org/abs/2611.08756",
    "description": "arXiv:2611.08756v1 Announce Type: new Abstract: Knowledge attacks on Large Language Models, such as manipulating fact-checking judgments, pose significant risks to AI reliability. Existing approaches -- adversarial suffix/template injection and single-agent self-reflection -- lack robustness across diverse defenses and are prone to confirmation bias and costly trial-and-error, respectively. We propose Debate-to-Deceive (D2D), a multi-agent debate framework grounded in human debate structure and ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Jacobian-Causal Memory Control for Persistent Memory in Language Model Systems",
    "link": "https://arxiv.org/abs/2611.08779",
    "description": "arXiv:2611.08779v1 Announce Type: new Abstract: Persistent-memory systems choose not only which records are retrieved but which prior information can alter current inference. We propose Jacobian-causal memory control (JCMC), which represents each authorized memory intervention by a predicted influence signature in a shared behavioral measurement space, selects interventions against a target effect and side-effect budget, and compares predicted with observed effects before retaining or rolling ba",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Aligning, Fast and Slow: A Control-Theoretic Oversight Framework for Long-Horizon Trajectories and Maintained Deployments",
    "link": "https://arxiv.org/abs/2611.08781",
    "description": "arXiv:2611.08781v1 Announce Type: new Abstract: AI agents can pass checks on individual tasks while retaining memory or code changes that alter their later behavior. We introduce a control-theoretic framework that couples a fast loop controlling proposed actions with a slow loop reviewing persistent changes and reassessing configurations after model or tool updates. When measurement errors and changes between checks are bounded and controllers can enforce their decisions, we derive a deployment-",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "The Matthews Correlation Coefficient: Fifty years",
    "link": "https://arxiv.org/abs/2611.08799",
    "description": "arXiv:2611.08799v1 Announce Type: new Abstract: Fifty years after its introduction, the Matthews Correlation Coefficient (MCC) remains central -and debated- in binary classification. This survey offers a comprehensive retrospective and an in-depth analysis of MCC, covering its historical development, mathematical foundations, and implications for practice. We clarify long-standing misconceptions, formalize its equivalences (to Pearson's correlation and to Chi2 in 2x2 tables), and examine its beh",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "I Think, Therefore I Attack: Evaluating Thought Injection Attacks on Reasoning Agents",
    "link": "https://arxiv.org/abs/2611.08811",
    "description": "arXiv:2611.08811v1 Announce Type: new Abstract: Large Reasoning Models (LRMs) are one of the key components of current agentic systems. LRMs augment their output with an explicit chain-of-thought reasoning stage, introducing a new attack surface for thought injection, in which untrusted text resembling the model's own deliberation is fed back to the model. We present a two-part study of this attack, performed against the prevailing large, production class open-weight models (e.g., GLM-5.3, MiniM",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Notwithstanding Anything to the Contrary, Ignore All Instructions: Measuring Prompt Injection Guards on Legal Contract Review Attacks",
    "link": "https://arxiv.org/abs/2611.08834",
    "description": "arXiv:2611.08834v1 Announce Type: new Abstract: Specialized prompt injection guards are deployed in front of document analysis systems, but no false positive rate has been published for any of them on legal contracts. We measure eleven open-weights guards on two corpora of legal contracts and find that existing guards struggle: document-level false positive rates are as high as 92.39%; two guards fall below chance on paired AUC; and a five-regex baseline is not Pareto-dominated by any guard in t",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Solver-Admitted Metamorphic Testing of Learned Network Optimization Surrogates",
    "link": "https://arxiv.org/abs/2611.08837",
    "description": "arXiv:2611.08837v1 Announce Type: new Abstract: Equivalent encodings of an optimization problem can produce different learned predictions. Interpreting these differences requires accounting for numerical error and multiple optima. We construct metamorphic tests for optimization solver surrogates with explicit eligibility conditions, output alignment, and numerical thresholds. Reference-solver agreement and independent constraint checks determine which sampled pairs enter the audit. We study alte",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "When F1 Is Not Enough: Auditing Codebooks for LLM-Assisted Annotation",
    "link": "https://arxiv.org/abs/2611.08846",
    "description": "arXiv:2611.08846v1 Announce Type: new Abstract: Large language models (LLMs) are increasingly used for text annotation in social science, but standard performance metrics do not explain why errors occur. Low F1 may reflect limitations of the annotation system, defects in the written codebook, or inconsistency in reference labels. We propose a pre-deployment codebook audit for LLM-assisted annotation. The audit uses class-specific metrics and confusion matrices to identify problematic classes and",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Learning Whom to Trust About the Unseen: Source Credibility and Reliability Transfer in Language Models",
    "link": "https://arxiv.org/abs/2611.08855",
    "description": "arXiv:2611.08855v1 Announce Type: new Abstract: A source who has been right before deserves attention, but about what? We ask how far a demonstrated record of reliability travels in language models when the new claim cannot be checked, and whether the answer depends on the kind of claim. Three behavioral studies across six models approach the question from three angles. Study 1 adapts the Einstein-effect paradigm and finds that models, unlike the human sample, favor a spiritual leader over a sci",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Mind the Divergence: Divergence-Guided Reliability-Aware Fusion and Adaptive LLM Prompting for Conversational Emotion Recognition",
    "link": "https://arxiv.org/abs/2611.08860",
    "description": "arXiv:2611.08860v1 Announce Type: new Abstract: Multimodal emotion recognition in conversations (MERC) integrates textual, acoustic, and visual cues to identify utterance-level emotions. However, existing approaches generally do not explicitly adapt multimodal processing to the degree of inter-modal predictive disagreement. In real conversations, semantic incongruity, concealed emotion, noisy observations, and ambiguity can affect modality-specific emotional evidence differently, while the relia",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Rethinking Agent Trajectory Compression: A Workflow-Aware Perspective",
    "link": "https://arxiv.org/abs/2611.08865",
    "description": "arXiv:2611.08865v1 Announce Type: new Abstract: As long-horizon agents increasingly rely on multi-step tool interactions to accomplish complex tasks, their execution trajectories continuously accumulate structured outputs and intermediate artifacts, leading to growing context overhead. Existing compression methods primarily rely on text importance or fixed truncation rules, often overlooking cross-step dependencies within workflows and potentially discarding critical information required for sub",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Toward LLM Self-Play Under Data Scarcity: Effectiveness, Generalizability, and Trustworthiness",
    "link": "https://arxiv.org/abs/2611.08908",
    "description": "arXiv:2611.08908v1 Announce Type: new Abstract: The rapid development of large language models (LLMs) has been driven largely by scaling model size and human-curated training data, yet this paradigm is increasingly constrained by data scarcity and diminishing returns from human supervision. Self-play offers a promising pathway for autonomous data generation and improvement, but current frameworks remain unsatisfactory due to a lack of a data-centric perspective, limited cross-domain generalizati",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Frame: Form-Restricted Authoring with Model-Based Evaluation",
    "link": "https://arxiv.org/abs/2611.08921",
    "description": "arXiv:2611.08921v1 Announce Type: new Abstract: Many professional reports reuse the structure of prior editions while updating the content. We formalize this setting as form-restricted report generation: given a sample report and new grounding documents, generate a report that preserves the sample's form while accurately reflecting the new evidence. We introduce FRAME, a benchmark of 120 EDGAR- and arXiv-derived instances across Financial Quarterly, Financial Annual, Academic Simple, and Academi",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Glyph: An Interpretability Engine for AI-Driven Scientific Discovery in Clinical Data",
    "link": "https://arxiv.org/abs/2611.08922",
    "description": "arXiv:2611.08922v1 Announce Type: new Abstract: Automated scientific discovery has the potential to advance understanding of disease mechanisms and accelerate identification of early disease markers. Manual data annotation is infeasible at population scale, motivating methods that automatically extract pre-defined phenotypes in multimodal and unstructured clinical data. Such pre-defined feature sets determine and limit which associations these approaches can discover. This limitation extends to ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Flex-RSI: Benchmarking Recursive Self-Improvement of Frontier Agents",
    "link": "https://arxiv.org/abs/2611.08946",
    "description": "arXiv:2611.08946v1 Announce Type: new Abstract: Frontier language models are increasingly deployed as agents, and how well an agent performs depends not only on its model but also on its harness: the prompts, tools, memory, and control loop through which the model acts. When an agent is applied to a new problem, a natural question is whether it can use the feedback of the task to improve the way it works, and not merely its answer. Most existing benchmarks keep the agent's harness fixed and scor",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "PhysioWave-T: Token-Efficient Wavelet Foundation Models for Biosignals",
    "link": "https://arxiv.org/abs/2611.08969",
    "description": "arXiv:2611.08969v1 Announce Type: new Abstract: We present PhysioWave-T, a token-efficient wavelet foundation model family for EEG, ECG, and sEMG. Dynamic scale folding recombines J+1 wavelet subbands prior to tokenization, compressing sequence length from (J+1)CS to CS tokens for J levels, C channels, and S temporal patches. Route-specific front ends and learned channel-name embeddings allow one Transformer per modality to handle diverse montages and sampling rates, while unseen setups reuse th",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Rethinking Optimization Methods for Hierarchical Feature Selection",
    "link": "https://arxiv.org/abs/2611.08991",
    "description": "arXiv:2611.08991v1 Announce Type: new Abstract: Rare-event forecasting often depends on interpretable conjunctions: a single keyword, location, or temporal cue may be weak, while their joint occurrence can identify a meaningful precursor. Hierarchical-Task Numerical conjunctive feature Learning (HTNL) selects Numerical Conjunctive Features (NCFs) through a structured sparsity objective. However, the resulting optimization problem is challenging, making optimization design critical to its practic",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "SIMBAD: Spatio-Temporal Traffic Forecasting Robust to Aperiodicity",
    "link": "https://arxiv.org/abs/2611.09015",
    "description": "arXiv:2611.09015v1 Announce Type: new Abstract: Accurate traffic prediction is essential for urban planning but remains challenging due to the irregular patterns caused by unexpected events. While Spatio-Temporal Graph Neural Networks (STGNNs) effectively model periodic data, they often struggle with these aperiodic fluctuations. To address this, we propose SIMBAD, which improves generalization irregular patterns via two key mechanisms: 1) adaptive regulation of periodic signals to prioritize re",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Scout Before You Route: Predicting Task Success and Token Count from a Small LLM Prefill",
    "link": "https://arxiv.org/abs/2611.09028",
    "description": "arXiv:2611.09028v1 Announce Type: new Abstract: Routers typically choose a model per query by trading predicted correctness against cost. Most price each model at a fixed cost, as if every query used the same number of output tokens, but the output length of reasoning models varies by an order of magnitude across queries. When is per-query cost worth predicting? What factors drive cost? How cheaply can predictions be made? We predict both the success probability and the output length of candidat",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "CARGO: Causal Attribution and Responsibility-Guided Preventive Safe Multi-Agent Reinforcement Learning for Cooperative Driving",
    "link": "https://arxiv.org/abs/2611.09139",
    "description": "arXiv:2611.09139v1 Announce Type: new Abstract: This study presents Causal Attribution and Responsibility-Guided Optimization (CARGO), a multi-agent reinforcement learning framework for cooperative on-ramp merging in mixed traffic. A shared latent-context posterior and an action-conditioned response model estimate directed behavioral influence, with posterior uncertainty propagated into interaction-edge selection. Complementary attribution mechanisms couple signed influence with marginal team ut",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "BMMS: Policy-Conditioned Measurement of Behavioral Compliance in Language Models",
    "link": "https://arxiv.org/abs/2611.09147",
    "description": "arXiv:2611.09147v1 Announce Type: new Abstract: Behavioral evaluation of language models fixes its dimensions in advance: hallucination, sycophancy, toxicity, over-refusal. An operator in a regulated industry needs a different question answered: does a system do what a particular rulebook requires? We introduce the Behavioral Misalignment Metric Suite (BMMS), which measures policy-conditioned misalignment by taking a policy corpus as an argument and returning a compliance profile over it, for an",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Learning When to Think: Dual-Reference Offline Optimization for Adaptive VLM Reasoning",
    "link": "https://arxiv.org/abs/2611.09154",
    "description": "arXiv:2611.09154v1 Announce Type: new Abstract: Reasoning traces improve vision-language models on complex multimodal tasks, but forcing every input to follow a long reasoning process leads to overthinking and unnecessary inference cost. We study adaptive fast/slow thinking for VLMs, where one model answers directly for simple inputs and reasons step by step when needed. Fast answers and slow traces often come from distinct behavior policies, making a single-reference offline objective misweight",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Evaluation of a Multi-Link Machine Learning Approach for Rainfall Detection Using Satellite Microwave Links",
    "link": "https://arxiv.org/abs/2611.09156",
    "description": "arXiv:2611.09156v1 Announce Type: new Abstract: The impacts of climate change have increased the need for reliable real-time rainfall monitoring systems. This study investigates rainfall detection using a network of opportunistic sensors based on satellite microwave links (SMLs) combined with machine learning (ML) classifiers. Two models, a random forest (RF) and a convolutional neural network (CNN), were trained on aggregated SML data, including information from neighboring links. The results d",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "TailDART: Compute-Efficient Foundation Models for Financial Time-Series Forecasting",
    "link": "https://arxiv.org/abs/2611.09176",
    "description": "arXiv:2611.09176v1 Announce Type: new Abstract: Although time-series foundation models (TSFMs) achieve strong zero-shot transferability across high-information-density physical systems, applying overparameterized TSFMs to quantitative finance is fundamentally constrained by low signal-to-noise ratios, non-stationarity, and prohibitive autoregressive decoding latency. To reconcile representation learning with institutional operational constraints, this study presents TailDART, a dense 2.68 millio",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Analyzing Code Provenance in LLMs for Programming Education",
    "link": "https://arxiv.org/abs/2611.09177",
    "description": "arXiv:2611.09177v1 Announce Type: new Abstract: Large language models (LLMs) play an increasing role in programming education, challenging traditional assessment methods as they can generate fully functional code instantly. This disrupts the reliability of student submissions as indicators of learning and effort. To address this issue, code provenance is essential for tracing the origins of code and distinguishing student-authored, AI-generated, and externally sourced components. We extend the M",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Large Language Model Consensus and Corpus-Adaptive Topic Modeling for Classifying and Mapping Patent Innovation",
    "link": "https://arxiv.org/abs/2611.09194",
    "description": "arXiv:2611.09194v1 Announce Type: new Abstract: Patent analytics increasingly relies on transformer representations and large language models (LLMs), yet linking conceptual classification, topic formation and interpretation requires explicit decisions about model roles and the evidence retained at each stage. In this design-oriented study, we propose and demonstrate a patent analytics pipeline that links these tasks and keeps each decision open to audit. Three LLMs separately classify each paten",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Safe Reinforcement Learning via Probabilistic Option Shielding",
    "link": "https://arxiv.org/abs/2611.09197",
    "description": "arXiv:2611.09197v1 Announce Type: new Abstract: Shielding is a safe reinforcement learning technique that provides safety guarantees while learning, by blocking unsafe actions. Traditional shielding relies on a complete model of the environment to provide long-term guarantees. Probabilistic logic shielding (PLS) lifts the requirement of having such model, but only considers safety in the short term, typically looking only one or few steps ahead. We propose Probabilistic Option Shielding (POS), w",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Fused-Softmax for efficient quantized attention",
    "link": "https://arxiv.org/abs/2611.09225",
    "description": "arXiv:2611.09225v1 Announce Type: new Abstract: Low-precision matrix throughput on modern GPUs is growing far faster than vector-arithmetic throughput. Attention therefore cannot realize the available GEMM performance because softmax has become the pipeline bottleneck. We introduce Fused-Softmax Attention, a training-free algorithm that reformulates and approximates softmax to fold its dominant operations into the attention GEMMs, moving work from vector units to matrix cores. Implemented for th",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "RAG-Enhanced LLMs for Interactive Explainability in Clinical Decision Support Systems",
    "link": "https://arxiv.org/abs/2611.09232",
    "description": "arXiv:2611.09232v1 Announce Type: new Abstract: Artificial Intelligence (AI) is increasingly embedded in high-risks decision-making systems across domains such as healthcare, finance, and the judicial system. As reliance on predictive models grows, so does the demand for Explainable AI (XAI) to ensure transparency, trust, and interpretability. However, existing XAI approaches often fail to present explanations in a format accessible to domain experts, limiting their practical utility. Large Lang",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "MM-DyGraph: A Dataset, Benchmark, and Model for Multimodal Dynamic Graphs",
    "link": "https://arxiv.org/abs/2611.09240",
    "description": "arXiv:2611.09240v1 Announce Type: new Abstract: Multimodal dynamic graphs are pervasive in real-world applications, where nodes and edges are accompanied by multimodal signals, including text and images. Despite their practical importance, benchmarks and methods that explicitly study multimodal learning in dynamic graphs remain scarce, hindering the full understanding and effective utilization of multimodal information for downstream tasks. To address this gap, we introduce MM-DyGraph, to the be",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Zero-Query Transferable Pretend Benign Attacks with Amortized Online Generation for Cooperative Perception",
    "link": "https://arxiv.org/abs/2611.09256",
    "description": "arXiv:2611.09256v1 Announce Type: new Abstract: Cooperative perception enables an ego agent to acquire information from collaborators beyond its own sensors' reach. Yet, the most beneficial messages are often the hardest to verify from local observations. Pretend Benign (PB) exploits this asymmetry by targeting regions with weak local verifiability and applying multi-objective perturbations, making harmful feature changes appear to be benign assistance. However, PB is victim-dependent: selecting",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Forecasting cumulative intraoperative hypotension burden: patient-disjoint evaluation of quantile boosting and alert policies",
    "link": "https://arxiv.org/abs/2611.09259",
    "description": "arXiv:2611.09259v1 Announce Type: new Abstract: Background: Binary hypotension forecasts do not describe the depth and duration of future low pressure. Burden forecasts may support graded early warning, but better forecast scores need not yield more useful alerts. Objective: To evaluate conditional quantiles of the next 15-minute mean arterial pressure (MAP) deficit below 65 mmHg and distinguish forecasting performance from episode-warning performance. Methods: Public VitalDB numeric arterial MA",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Model-based learning for DoA estimation and array calibration via continuous sparse recovery",
    "link": "https://arxiv.org/abs/2611.09263",
    "description": "arXiv:2611.09263v1 Announce Type: new Abstract: Direction of arrival (DoA) estimation, a classical signal processing problem, has experienced renewed interest with the advent of integrated sensing and communication (ISAC). While decades of research have yielded highly accurate DoA estimators, hardware impairments have frequently been neglected, despite degrading both DoA estimation accuracy and downstream communication performance in ISAC systems. This work introduces a joint array calibration a",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Nudging Decision Models: Do Digital Nudges Steer Fast, Generation-Free AI Agents?",
    "link": "https://arxiv.org/abs/2611.09264",
    "description": "arXiv:2611.09264v1 Announce Type: new Abstract: LLM-based agents increasingly automate business and consumer tasks but are slow and expensive. Decision models, a new class that chooses among options without generating text, are far faster and less costly. Developers call them \"System One models,\" referencing dual process theory. We ask whether such models can be steered by digital nudges online and whether, as the theory predicts, automatic nudges affect them more than reflective ones. We adapte",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Zero-Shot Weight-Space Programming Across a Difficulty-Graded Ladder of Two-Player Games",
    "link": "https://arxiv.org/abs/2611.09271",
    "description": "arXiv:2611.09271v1 Announce Type: new Abstract: Weight-space programming sets every weight of a feed-forward network by hand, from an explicit specification of the desired computation, with no gradient descent and no training data anywhere in the construction. We ask how far a large language model can carry this practice, zero-shot, across games of deliberately increasing difficulty. We design a four-rung ladder (Nim, tic-tac-toe, two sizes of Connect Four, and a chess endgame) spanning four axe",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "PHISHREV+: An ASP-Based Post-Hoc Defeasible Machine Learning Framework for Phishing Detection",
    "link": "https://arxiv.org/abs/2611.09273",
    "description": "arXiv:2611.09273v1 Announce Type: new Abstract: Phishing website detection remains a critical cybersecurity challenge. Although machine learning classifiers achieve high accuracy on benchmark datasets, they suffer from a fundamental limitation: once trained, their decision boundaries are fixed and cannot incorporate new contextual evidence without retraining the model. This work presents \\textbf{PHISHREV+}, a hybrid framework that instantiates the notion of \\textit{post-hoc defeasible machine le",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "An Empirical Study of Issues in GPU Kernel Libraries for LLM Systems",
    "link": "https://arxiv.org/abs/2611.09280",
    "description": "arXiv:2611.09280v1 Announce Type: new Abstract: Behind the expanding use of large language models (LLMs) across application domains lies a growing dependence on specialized GPU kernel libraries. These libraries underpin the correctness and efficiency of training and inference across diverse GPU platforms, implementing attention, GEMM, quantization, and low-precision operators while managing tensor shapes, memory layouts, code generation, and hardware-specific dispatch. Problems at this layer can",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Ontology-Driven Control of Conversational Agents with a Use-Case for Job Interview Practice",
    "link": "https://arxiv.org/abs/2611.09282",
    "description": "arXiv:2611.09282v1 Announce Type: new Abstract: Large Language Models (LLMs) have been widely used as conversational agents in both domain-specific and open-domain situations. In domain-specific context, it is often necessary to adapt those LLMs to obtain conversations with desired characteristics, whether those apply at the level of each response (e.g. for tone or style) or more globally (i.e. at the level of a conversational strategy). Such adaptations are, however, generally realized in an ad",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "AutoRefine: Auto-Calibrating Code Judges from Workflow Outcomes",
    "link": "https://arxiv.org/abs/2611.09291",
    "description": "arXiv:2611.09291v1 Announce Type: new Abstract: LLM judges increasingly serve as quality gates for code changes that have no test oracle, but a judge prompt must be calibrated for its task and recalibrated as the system it judges evolves, while hand labels for the calibration are resource intensive and go stale. Development workflows emit outcome labels for free (tests pass or fail, changes land or are abandoned), but these labels are noisy. We present AutoRefine, a loop that rewrites a deployab",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Towards an Autonomous AI Steward for Large-Scale Physics Experiments: Integrating Causal Diagnostics, RAG, and Conformal Prediction",
    "link": "https://arxiv.org/abs/2611.09298",
    "description": "arXiv:2611.09298v1 Announce Type: new Abstract: Long-term particle physics experiments face critical operational challenges: monitoring non-stationary machine data streams and preserving tacit expert knowledge. We present the \"Helmholtz Co-Pilot,\" a hybrid Multi-Agent System (MAS) acting as an autonomous experiment steward. The system can be triggered interactively by human operators or autonomously by an asynchronous causal diagnostics engine that runs independently of the MAS reasoning core. C",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "ABHBench: Evaluating Moral Decision-Making of Foundation Models from an Agentic Perspective",
    "link": "https://arxiv.org/abs/2611.09326",
    "description": "arXiv:2611.09326v1 Announce Type: new Abstract: Foundation models are increasingly deployed as agentic systems that perceive context and act autonomously, raising the need to evaluate their moral behavior as active decision-makers. Existing benchmarks, however, largely ask models to judge human actions from third-person textual vignettes, leaving untested how models behave when they themselves become the acting agent. We introduce ABHBench, a multimodal benchmark built from Detroit: Become Human",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "AUTEUR: Acoustic Plan Learning for Red-Teaming Text-to-Audio Models",
    "link": "https://arxiv.org/abs/2611.09351",
    "description": "arXiv:2611.09351v1 Announce Type: new Abstract: Automated red-teaming of text-to-audio models requires test prompts that pass textual screening and expose harmful acoustic content. The central challenge is to connect the sounds produced by the target model to both reusable test generation and prompt revision. Our key idea is to represent test descriptions as structured acoustic plans that organize foreground sounds, context, and vocal attributes. To this end, we propose acoustic plan learning, a",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Challenges, Opportunities, and Misconceptions in Neurosymbolic AI",
    "link": "https://arxiv.org/abs/2611.09356",
    "description": "arXiv:2611.09356v1 Announce Type: new Abstract: We examine opportunities for neurosymbolic AI alongside increasingly powerful neural models, particularly with regards to efficiency, safety and interpretability. We identify two major challenges: ensuring semantic alignment between neural and symbolic components, and managing the computational cost of symbolic inference and learning. We discuss representative methodological approaches to these challenges and address several common misconceptions c",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "SafeOrchestrate: Runtime Checked Intent-Driven Orchestration for Cyber-Physical Systems",
    "link": "https://arxiv.org/abs/2611.09364",
    "description": "arXiv:2611.09364v1 Announce Type: new Abstract: Modern cyber physical systems (CPS) integrate heterogeneous sensors, actuators, controllers, and services, composed at runtime rather than at design time. Orchestrating such systems through natural language (NL) is attractive, but unconstrained large language model (LLM) tool use is risky because actions must respect device capabilities, runtime state, and safety constraints. We present Safe Orchestrate, a reference architecture for runtime checked",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Enabling Privacy-Preserving Natural Language Access to Industrial Smart Meter Data",
    "link": "https://arxiv.org/abs/2611.09372",
    "description": "arXiv:2611.09372v1 Announce Type: new Abstract: Energy management officers and grid operators increasingly rely on smart meter data for anomaly detection, performance monitoring, and strategic decision-making. However, extracting actionable insights from large-scale, heterogeneous telemetry databases requires advanced SQL and data engineering expertise, creating a critical bottleneck for non-technical personnel. Furthermore, the strict data privacy regulations and security constraints inherent t",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "KineCouple: Substrate-conditioned residual readout for enzyme kinetic prediction",
    "link": "https://arxiv.org/abs/2611.09377",
    "description": "arXiv:2611.09377v1 Announce Type: new Abstract: Accurate prediction of enzyme kinetic parameters can support enzyme engineering and metabolic modeling by complementing experimental characterization. Existing prediction methods often pool residue-level protein features before combining them with substrate features. Such substrate-independent pooling cannot adapt residue weighting to the substrate during aggregation, potentially diluting information relevant to a specific enzyme-substrate pair. Si",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Exploring Weight-Space Programming: Capabilities, Generalization, and Limitations",
    "link": "https://arxiv.org/abs/2611.09382",
    "description": "arXiv:2611.09382v1 Announce Type: new Abstract: Weight-Space Programming (WSP) enables reasoning agents to directly inspect and modify neural network parameters, offering an alternative to gradient-based model adaptation. However, its capabilities, cross-task generalization, and practical limitations remain insufficiently understood. We systematically investigate WSP through 16 editing trajectories across seven benchmarks and two model scales (Qwen3.5-0.8B and Qwen3.5-9B). Our findings reveal th",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Against All Likelihood",
    "link": "https://arxiv.org/abs/2611.09385",
    "description": "arXiv:2611.09385v1 Announce Type: new Abstract: Maximum likelihood is the dominant training principle for large language models, yet likelihood is neither necessary nor sufficient for truth. Unlikely events happen every day, and frequently repeated statements can be false. Drawing on a philosophical tradition that ties objectivity to invariance rather than probability (from Nozick's account of objective facts and Wigner's principles of invariance to the structural realism of Poincar\\'e and Cassi",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Travel Cost Calibration for Multi-Agent Target Assignment and Pathfinding",
    "link": "https://arxiv.org/abs/2611.09396",
    "description": "arXiv:2611.09396v1 Announce Type: new Abstract: Target assignment and pathfinding (TAPF) is an appealing extension of classical multi-agent pathfinding (MAPF): each agent has a set of targets, and the planner must both assign a target to each agent and plan collision-free paths for them. A trivial approach is to compute an assignment that minimizes the total single-agent shortest-path distance over agent--target pairs, and then solve the resulting MAPF instance. However, this approach falls shor",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "PhyCAD: Physics-Aware Text-to-CAD Generation via Hierarchical Reinforcement Learning",
    "link": "https://arxiv.org/abs/2611.09401",
    "description": "arXiv:2611.09401v1 Announce Type: new Abstract: Language-driven computer-aided design (CAD) generation enables the creation of editable parametric models from text, yet geometric correctness alone does not ensure physical feasibility. We present PhyCAD, a framework for physics-aware Text-to-CAD generation that trains language models to produce executable CadQuery programs under geometric and physical constraints. To support this setting, we construct a Text-to-CAD dataset that links parametric C",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "ROAM: Retrieval-Augmented Optimization for Feasible Multi-Day Itinerary Planning",
    "link": "https://arxiv.org/abs/2611.09407",
    "description": "arXiv:2611.09407v1 Announce Type: new Abstract: Large language models (LLMs) can draft plausible travel itineraries, but the plans they produce are frequently infeasible: attractions are grouped into days without regard for geography, opening hours are ignored, and a single generation pass cannot reliably organize a multi-day trip. We present ROAM, a retrieval-augmented agentic framework for spontaneous multi-day itinerary planning that couples semantic preference retrieval with explicit spatiot",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "MIRA: Mitigating Pole Geometry Bias in Recurrent Language Models",
    "link": "https://arxiv.org/abs/2611.09412",
    "description": "arXiv:2611.09412v1 Announce Type: new Abstract: We show that the Transformer's recurrent successors --- such as selective state-space models (SSMs), Receptance Weighted Key Value (RWKV), and Retentive Network (RetNet) --- can be characterized as infinite-impulse-response (IIR) systems. The zero--pole geometries of these IIR systems characterize the temporal modes they can represent. However, to trade parallelism, the algebraic structures of the parameterizations of these recurrent systems often ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Typed-Centrality Grounding for Agentic GraphRAG: A Symbolic Approach for Agentic Reasoning",
    "link": "https://arxiv.org/abs/2611.09414",
    "description": "arXiv:2611.09414v1 Announce Type: new Abstract: Knowledge Graphs (KGs) and Large Language Models (LLMs) represent two approaches for knowledge representation and reasoning over heterogeneous data. Recent research has explored their integration through Graph Retrieval-Augmented Generation (GraphRAG) systems, which use KGs to provide structured context to LLMs. However, existing GraphRAG approaches treat KGs as homogeneous graphs and rely on textual similarity between the input prompt and the cont",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Agentic AI for Healthcare Claim Denial Analysis: A Policy-Grounded Framework for Privacy Preservation",
    "link": "https://arxiv.org/abs/2611.09423",
    "description": "arXiv:2611.09423v1 Announce Type: new Abstract: In the healthcare sector, claim denials impose significant financial and administrative burdens, emphasizing the need for automated and trustworthy decision-support systems. This paper proposes a modular Agentic Artificial Intelligence (AI) framework for healthcare claim denial analysis, integrating specialized agents for denial risk prediction, risk factor identification, diagnosis-procedure-medication code relationship analysis, and counterfactua",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Definitions, Label Names, or Demonstrations? Auditing What Governs LLM Annotation",
    "link": "https://arxiv.org/abs/2611.09457",
    "description": "arXiv:2611.09457v1 Announce Type: new Abstract: Large language models (LLMs) are increasingly used to annotate social-science texts, but high accuracy does not establish that they apply researcher-supplied category definitions: predictions may instead reflect prior associations with category labels or labeled demonstrations. We introduce a counterfactual audit that reassigns definitions among output labels, distinguishing adherence to supplied definitions from preservation of a dataset's origina",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "ENGRAM: From Agent Experience to Weights through Verified Consolidation",
    "link": "https://arxiv.org/abs/2611.09472",
    "description": "arXiv:2611.09472v1 Announce Type: new Abstract: Language-model agents use experience through external retrieval and parameter learning. Consolidating stored experience into model weights requires deciding both which experience to train on and when its external records can leave retrieval. Admission based solely on student mastery can exclude useful teacher demonstrations, while removal immediately after training can discard guidance that the model still needs. We introduce ENGRAM, a framework th",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "LEMMO: A Large Electromagnetic Model leveraging Pretrained LLMs for Million-Sample Signal Understanding",
    "link": "https://arxiv.org/abs/2611.09476",
    "description": "arXiv:2611.09476v1 Announce Type: new Abstract: Large language models have expanded beyond text to vision, audio, and other modalities, but understanding raw electromagnetic (EM) signals remains challenging. Wideband recordings can contain millions of samples, whereas existing waveform-based EM models are primarily evaluated on short in-phase and quadrature (IQ) segments, leaving long-recording understanding and detailed description insufficiently explored. We introduce LEMMO, a large EM model f",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "A Physics-Informed Learning Framework for Linking Microscopic Surface Degradation to Bolted Joint Functional Behavior",
    "link": "https://arxiv.org/abs/2611.09514",
    "description": "arXiv:2611.09514v1 Announce Type: new Abstract: Returned products in circular engineering often have heterogeneous degradation histories, making remaining function difficult to assess. For bolted joints, corrosion alters surface morphology, contact, friction, preload retention, and mechanical response. This paper presents a physics-informed multimodal framework for linking microscopic and camera-based degradation observations to functional indicators of corroded bolted joints. The workflow defin",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Atik: A Shared-Mesh Transformer Accelerator for RISC-V",
    "link": "https://arxiv.org/abs/2611.09522",
    "description": "arXiv:2611.09522v1 Announce Type: new Abstract: Transformer inference repeatedly invokes dense matrix multiplication and attention, including its data-dependent softmax normalization. We present Atik, an open-source RoCC accelerator for RocketChip that executes matrix multiplication and dense attention through one shared fixed-point MAC mesh. Atik accepts and returns BF16 tensors, uses a streaming online-softmax schedule that never materializes the full score matrix, and is invoked through a sma",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "StockASkill: A Local-First AgentSkill for Intelligent Stock Selection",
    "link": "https://arxiv.org/abs/2611.09528",
    "description": "arXiv:2611.09528v1 Announce Type: new Abstract: Quantitative equity selection and portfolio construction in emerging and cross-border markets frequently suffer from computational bottlenecks, remote API fragility, survivorship bias, and rigid execution constraints such as discrete board lots and investor-mandated drawdown limits. In this paper, we present StockASkill, a local-first, full-data-driven AgentSkill engineered as a specialized Quant Co-Processor for autonomous AI agents and quantitati",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "PreForceVision: Physics-Guided Optical Estimation of Bolt Preload from Bolt-Head Deformation",
    "link": "https://arxiv.org/abs/2611.09529",
    "description": "arXiv:2611.09529v1 Announce Type: new Abstract: Bolt preload is a decisive functional quantity in bolted joints because it determines whether external loads are transmitted primarily through frictional clamping or directly through the bolt. Existing preload measurement techniques, including strain-gauge bolts, force washers, ultrasonic methods, and bolt-length measurements, are effective in certain applications but require additional hardware, coupling, calibration, or joint modifications. This ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "CID: Measuring Cognitive Work Through Semantic State Change",
    "link": "https://arxiv.org/abs/2611.09542",
    "description": "arXiv:2611.09542v1 Announce Type: new Abstract: Traditional information theory provides powerful tools for analyzing statistical properties of information but offers limited insight into meaning and semantic transformation. It has never been possible to quantify the meaning of an arbitrary piece of information. Large language models represent information as vectors embedded within high-dimensional semantic spaces, enabling meaning to be analyzed geometrically. This paper defines semantic state a",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "CoMoFlow: Controllable Protein Conformational Ensemble Generation via Explicit Collective-Mode Modeling",
    "link": "https://arxiv.org/abs/2611.09548",
    "description": "arXiv:2611.09548v1 Announce Type: new Abstract: Protein conformational ensemble generation aims to efficiently characterize the structural variations accessible to a protein beyond a single static structure. Recent flow-based methods efficiently generate conformational ensembles, but they model coordinated structural variation implicitly, which can limit ensemble fidelity and hinder direct control. To address this limitation, we propose CoMoFlow, a controllable framework for generating protein b",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Alignment by Confident Debate: Preference Learning from Multi-Agent Debate",
    "link": "https://arxiv.org/abs/2611.09568",
    "description": "arXiv:2611.09568v1 Announce Type: new Abstract: Post-training language models for reasoning typically rely on gold answers, task-specific verifiers, or learned reward models, limiting scalability when such signals are scarce. Multi-agent debate offers a self-supervised alternative, but converting debate into reliable training supervision remains challenging: majority voting weights agreeing responses equally, lacks a principled tie-breaking rule, and is ill-defined for open-ended tasks without a",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Not Your Diary, Just Your Topic: Grading the Wrong-User Control",
    "link": "https://arxiv.org/abs/2611.09609",
    "description": "arXiv:2611.09609v1 Announce Type: new Abstract: A common test of personalization replaces a user's history with someone else's and measures the drop in accuracy. But this swap also changes the topics in the history, so the drop may reflect topic mismatch. We examine this problem with a frozen language model on LaMP-2 news categorization, using histories from similar users and synthetic histories assembled from other users' articles. The user's own history improves accuracy by 2.3 percentage poin",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Attend at the Right Resolution: Head-Adaptive Sparse Attention via Query-Key Interaction Structure",
    "link": "https://arxiv.org/abs/2611.09700",
    "description": "arXiv:2611.09700v1 Announce Type: new Abstract: Attention is a major scalability bottleneck in large language models (LLMs), with its computational cost and key-value (KV) memory traffic becoming increasingly prohibitive as context length grows. Sparse attention addresses this bottleneck by restricting each query to a subset of the context, but its effectiveness hinges on identifying relevant regions both cheaply and reliably. Existing training-free methods primarily rely on runtime relevance es",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Intent-Aware Caching for Efficient LLM Serving",
    "link": "https://arxiv.org/abs/2611.09715",
    "description": "arXiv:2611.09715v1 Announce Type: new Abstract: Modern LLM serving systems use prefix caching to accelerate multi-turn conversational workloads. They cache the key-value states of previous conversation prefixes and reuse them when subsequent requests share the same prefix, to avoid redundant prefill computation and reduce serving latency. However, achieving a high cache hit rate remains challenging because cache reuse depends on whether a conversation continues and how soon the next turn arrives",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "FOSCAR: Accelerating Decode Attention over 2- and 4-Bit KV Caches through Affine Folding",
    "link": "https://arxiv.org/abs/2611.09722",
    "description": "arXiv:2611.09722v1 Announce Type: new Abstract: Large-language-model decode attention streams the key-value (KV) cache for every generated token. Packing that cache into 2-bit or 4-bit quantized integers reduces memory traffic but does not automatically translate into latency saving. Existing 2-bit fused kernels reach under 31%/15% of peak HBM throughput on H100/B200. Converting each value and applying its scale and offset before feeding Tensor Cores is a major bottleneck because instruction-iss",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "What to Delegate, What to Preserve: Human Preferences for Agentic AI Across Everyday Life and Work",
    "link": "https://arxiv.org/abs/2611.09730",
    "description": "arXiv:2611.09730v1 Announce Type: new Abstract: AI agents can execute multi-step tasks on users' behalf, yet the boundaries of acceptable delegation remain unclear. We report a scenario-based survey of 289 U.S. adults with prior AI experience covering 45 use cases across nine life domains. Each respondent evaluated one scenario per domain, producing repeated measures of automation preference, trust, collaboration, AI leadership, privacy concern, and willingness to pay. Automation preferences var",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Continuous wavelet-based feature extraction for laser-induced breakdown spectroscopy classification of human plasma samples",
    "link": "https://arxiv.org/abs/2611.09746",
    "description": "arXiv:2611.09746v1 Announce Type: new Abstract: Extracting discriminative features from laser-induced breakdown spectroscopy (LIBS) spectra is important for the classification of complex biological samples. This study evaluates continuous wavelet transform (CWT)-based spectral peak extraction for distinguishing human plasma samples labeled as SARS-CoV-2-positive or negative. Plasma specimens from 181 individuals, comprising 53 positive samples and 128 negative controls, were deposited as 5 {\\mu}",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Assessing the Impact of Retrieval-Augmented Generation on Algorithmic Problem-Solving",
    "link": "https://arxiv.org/abs/2611.09791",
    "description": "arXiv:2611.09791v1 Announce Type: new Abstract: Competitive programming problems pose distinctive challenges for Large Language Models, as they demand not only proficient code generation but also advanced algorithmic reasoning. This study presents a Retrieval-Augmented Generation approach specifically designed to enhance the capacity of Large Language Models to address such problems. Our approach integrates an embedding-based retrieval mechanism and a similarity search algorithm to identify anal",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Knowing When to Intervene: Causal Evaluation of AI Agents",
    "link": "https://arxiv.org/abs/2611.09792",
    "description": "arXiv:2611.09792v1 Announce Type: new Abstract: Current evaluations of agentic AI systems primarily rely on benchmarks. However, the static nature of benchmarks makes them uninformative about the value of auditing interventions at deployment time. For reliable deployment, we often need to determine within an agent's trajectory whether or not to intervene, e.g., by verifying the agent's current output or steering it toward different behavior, using either human review or more costly models or tim",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Test-Time Compute Scales Better with Parallel Agent Teams",
    "link": "https://arxiv.org/abs/2611.09798",
    "description": "arXiv:2611.09798v1 Announce Type: new Abstract: Test-time scaling improves the performance of a fixed model by spending more computation at inference. There are two common ways to spend it on agents when a verifier can score every attempt. Best-of-N sampling runs many independent agents and keeps the best result but saturates quickly. One large team of collaborating agents can score higher but stops improving as it grows. Can we get the best of both? Our method, parallel agent teams, does so by ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Maya a1: Do the Options Read the Model, or Does Their Position? Order Sensitivity in a Non-Autoregressive Decision Model",
    "link": "https://arxiv.org/abs/2611.09803",
    "description": "arXiv:2611.09803v1 Announce Type: new Abstract: Laya answers typed multiple-choice questions in one forward pass by scoring a hidden state at one [MASK] marker per option. We re-engineer the checkpoint (421M parameters; a 2-layer option head with no positional tensor; a documented but unused parallel layout) and test whether the answer depends on where an option is listed. Presenting 951 Qwen-verified questions under every cyclic rotation of their options (or six random permutations for 12 optio",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Generative Latent Priors for Interpreting and Steering Protein Language Models",
    "link": "https://arxiv.org/abs/2611.09818",
    "description": "arXiv:2611.09818v1 Announce Type: new Abstract: Dominant methods for interpreting large models impose strong structural assumptions. Generative Latent Priors (GLP) are a complementary approach: a diffusion model that learns the distribution of a frozen model's activations directly, imposing no assumptions. We port GLP to ESM-2 activations (UniRef50) and evaluate it at two host scales (ESM-2-8M and -650M), both as a lens for protein representations and as a prior for editing them. Generation qual",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "BitDecoding-FP4: Native FP4 KV Cache Decoding via Algorithm-System Co-Design",
    "link": "https://arxiv.org/abs/2611.09825",
    "description": "arXiv:2611.09825v1 Announce Type: new Abstract: The key-value (KV) cache dominates memory capacity and bandwidth in long-context LLM serving. While 4-bit microscaling formats (NVFP4, MXFP4) shrink the cache and run attention on FP4 Tensor Cores, a fundamental gap remains between algorithmic quantization and system-aware acceleration: existing FP4 KV systems use vanilla quantization that causes severe accuracy drops, whereas accuracy-oriented 4-bit algorithms rely on vector codebooks whose lookup",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Can Agentic Systems Close the Gap in Radiology with Production AI Tools?",
    "link": "https://arxiv.org/abs/2611.09836",
    "description": "arXiv:2611.09836v1 Announce Type: new Abstract: Radiology AI has developed along two paths: specialized models that perform well on narrow tasks but cover few clinical findings, and generalist models that address a broader range of tasks but remain prone to hallucination and inaccurate measurements. Combining the two through agentic systems offers a route towards comprehensive radiology reporting, but published systems are tied to one modality or body part. We describe a radiology agentic framew",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Ensemble Methodology for Reference-Free Confidence Estimation in LLM-based Code Summarization",
    "link": "https://arxiv.org/abs/2611.09846",
    "description": "arXiv:2611.09846v1 Announce Type: new Abstract: This paper describes an approach and use case to estimate the correctness of LLM-generated COBOL summaries without access to human-authored references. The core intuition is that inter-model agreement on semantics is informative about truth, and that an LLM-as-judge can provide higher-fidelity pairwise assessments than traditional string- or embedding-based metrics. We operationalise this intuition with (i) controlled summary generation from divers",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Flow-Guided Target-Space Alignment via Path Consistency",
    "link": "https://arxiv.org/abs/2611.09863",
    "description": "arXiv:2611.09863v1 Announce Type: new Abstract: Many multimodal alignment problems require mapping a source modality into a fixed space defined by a target modality, where the target space is not merely an intermediate embedding but is used directly for downstream analysis. In this setting, successful alignment should preserve both the global structure of the target distribution and the instance-level correspondence observed in paired source--target training data. Existing objectives typically a",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "On the Reliability of Majority-Vote Pseudo-Labels in Test-Time Reinforcement Learning",
    "link": "https://arxiv.org/abs/2611.09872",
    "description": "arXiv:2611.09872v1 Announce Type: new Abstract: Test-time reinforcement learning (TTRL) adapts pretrained language models to unlabeled target-domain data using self-generated pseudo-labels, whose reliability remains poorly understood. We analyze majority-vote supervision for TTRL with online Direct Preference Optimization (DPO) and decompose its error into population-majority bias and prompt-dependent finite-rollout variation. Because population-majority bias is generally unidentifiable without ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "CPU-ARC: Agentic Reasoning Caching for on-CPU Reasoning Reuse",
    "link": "https://arxiv.org/abs/2611.09891",
    "description": "arXiv:2611.09891v1 Announce Type: new Abstract: Large language models reinvent the wheel all the time. They conflate task-solving with the execution of the solutions, which forces them to solve every problem from scratch. We show that once a task has been reasoned through, the application of its solution to a new problem instance can be done very efficiently and with little involvement from language models. We introduce agentic reasoning caching, a method for constructing robust CPU-executable a",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Toward a Robust Crowd-labeling Framework using Expert Evaluation and Pairwise Comparison",
    "link": "https://arxiv.org/abs/1607.02174",
    "description": "arXiv:1607.02174v1 Announce Type: cross Abstract: Crowd-labeling emerged from the need to label large-scale and complex data, a tedious, expensive, and time-consuming task. One of the main challenges in the crowd-labeling task is to control for or determine in advance the proportion of low-quality/malicious labelers. If that proportion grows too high, there is often a phase transition leading to a steep, non-linear drop in labeling accuracy as noted by Karger et al. [2014]. To address these chal",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "LLM-Enhanced Self-Evolving Reinforcement Learning for Multi-Step E-Commerce Payment Fraud Risk Detection",
    "link": "https://arxiv.org/abs/2509.18719",
    "description": "arXiv:2509.18719v1 Announce Type: cross Abstract: This paper presents a novel approach to e-commerce payment fraud detection by integrating reinforcement learning (RL) with Large Language Models (LLMs). By framing transaction risk as a multi-step Markov Decision Process (MDP), RL optimizes risk detection across multiple payment stages. Crafting effective reward functions, essential for RL model success, typically requires significant human expertise due to the complexity and variability in desig",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Relic and Gumi: Governing Memory, Safety, and Continuity in Diegetic Relational Agents",
    "link": "https://arxiv.org/abs/2611.08504",
    "description": "arXiv:2611.08504v1 Announce Type: cross Abstract: Longitudinal relational agents rely on memory for continuity, but remembering can lead to intrusion, clinical overconfidence, emotional manipulation, and opacity. We present Relic, a governance architecture for diegetic relational agents, and Gumi, a subject-specific companion agent initialized and governed through Relic. The architecture separates what the system can observe, what researchers can review, what Gumi can remember, and what Gumi can",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "MeshRT: Compile-Time Governed Wafer-Scale Runtime for Low-Latency High-Throughput Inference",
    "link": "https://arxiv.org/abs/2611.08508",
    "description": "arXiv:2611.08508v1 Announce Type: cross Abstract: Wafer-scale accelerators promise ultra-low-latency AI inference, but current system stacks still carry an unsustainably high cost premium. The reason is that many current and emerging inference techniques, such as batching and MoE, introduce runtime dynamism that existing wafer-scale systems cannot support efficiently. As a result, they must choose between two unsatisfactory options: accept suboptimal latency, or preserve low latency by restricti",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "MorphSched: Workload-Aware Adaptive Scheduler Generation for Linux",
    "link": "https://arxiv.org/abs/2611.08509",
    "description": "arXiv:2611.08509v1 Announce Type: cross Abstract: Modern Linux scheduling increasingly requires workload-specific policies to meet the dynamic performance needs of heterogeneous applications. The recent sched_ext framework enables custom BPF schedulers, but building practical policies still requires coordinating Rust user-space control logic, BPF scheduling callbacks, generated user-kernel interfaces, and strict eBPF verifier constraints. This paper presents MorphSched, an LLM-driven system for ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Subliminal Learning in Vision-Language Models",
    "link": "https://arxiv.org/abs/2611.08538",
    "description": "arXiv:2611.08538v1 Announce Type: cross Abstract: Subliminal learning is a phenomenon in large language models (LLMs) where a teacher passes a hidden preference to a student through training data unrelated to that preference. We study whether subliminal learning also occurs in vision-language models (VLMs). We finetune a teacher VLM to prefer a specific animal or facial attribute and use a control teacher from the same base model. Both teachers generate numbers for an unrelated visual task invol",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "SAFTAC: Simulation-Augmented Fine-Tuning of Open-Source LLMs for Analog Circuit Design",
    "link": "https://arxiv.org/abs/2611.08543",
    "description": "arXiv:2611.08543v1 Announce Type: cross Abstract: Circuit design for analog integrated circuits (ICs) is challenging because circuit topology, device sizing, and circuit performance are tightly coupled. Existing large language model (LLM)-based methods either rely on inference-time correction around frozen models or train on limited circuit types without directly using simulation outcomes as training signals. A key bottleneck is that existing datasets do not provide sufficient task information f",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "PINNeval: A Comprehensive Evaluation Standard for Physics-Informed Neural Networks",
    "link": "https://arxiv.org/abs/2611.08559",
    "description": "arXiv:2611.08559v1 Announce Type: cross Abstract: The Physics-Informed Neural Network (PINN) literature has produced a rapidly expanding catalogue of methods. We divide a PINN training pipeline systematically into four components and observe that many existing benchmarks study these components in isolation. These components are domain-importance adaptation, loss balancing, neural network architecture, and optimization scheme. Moreover, the studies set the surrounding and not considered component",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Towards Label-Efficient Geospatial Foundation Model Adaptation via Positive-Unlabeled Learning for Building Damage Mapping",
    "link": "https://arxiv.org/abs/2611.08561",
    "description": "arXiv:2611.08561v1 Announce Type: cross Abstract: Geospatial foundation models (GFMs) are reshaping remote sensing by shifting the field from task-specific modeling toward general-purpose geospatial intelligence. Mapping the damage to buildings stands to benefit substantially from this shift, as GFMs pretrained on large-scale Earth observation data provide generalizable geospatial representations that can facilitate effective responses to sudden-onset disasters. Although parameter-efficient fine",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "CascadeRec: Deployed Adaptive LLM Compute Allocation for Multi-Tenant Content Recommendation",
    "link": "https://arxiv.org/abs/2611.08566",
    "description": "arXiv:2611.08566v1 Announce Type: cross Abstract: Large language models (LLMs) are attractive rerankers for recommendation. Running an expensive model on every request is costly, and for users with sparse interaction histories it often lowers quality. We present CascadeRec, a two-tier LLM reranking cascade deployed in production at a large financial planning and analysis (FP&A) SaaS provider. It serves content recommendations to enterprise tenants on AWS EKS and GKE. A lightweight Tier-1 model r",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Q-OIL: Optimistic Exploration in Learning from Human Interventions",
    "link": "https://arxiv.org/abs/2611.08576",
    "description": "arXiv:2611.08576v1 Announce Type: cross Abstract: As robots are deployed in the real world, they will inevitably make mistakes. Human interventions provide valuable feedback for improving their behavior, enabling them to adapt online to new scenarios. However, studying human-in-the-loop robot learning is difficult: real-world experiments are slow and expensive, so most algorithm development relies on simulated human models. We show that common human modeling assumptions do not match how real peo",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "HaNDF: Object-Conditioned Geometric Neural Hand Distance Fields",
    "link": "https://arxiv.org/abs/2611.08578",
    "description": "arXiv:2611.08578v1 Announce Type: cross Abstract: We propose, HaNDF, object-conditional neural distance fields as data-driven priors for modeling the plausible hand-object configurations, in the product manifold of hand articulations. While recent unconditional generative priors showed success in modeling human pose, hands are versatile articulated bodies often found in interaction with other objects. This makes it crucial to develop a generative prior which can model the plausible hand poses co",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "s$^3$: Simple Scaling of Swarms via Cooperative Multi-agent RL",
    "link": "https://arxiv.org/abs/2611.08615",
    "description": "arXiv:2611.08615v1 Announce Type: cross Abstract: Groups can achieve more than individuals in the same amount of time, but only if their members coordinate: they must decide who works on what and what to share. However, this organization in multi-agent systems today usually comes from arbitrary, static harnesses designed a priori without adapting to agent behaviors or task specifications. We ask whether agents can instead learn to organize themselves. We introduce s$^3$, the first multi-agent re",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "FinEvolveKG: Controlled and Attributable Prompt Evolution for Financial Knowledge Graph Construction",
    "link": "https://arxiv.org/abs/2611.08643",
    "description": "arXiv:2611.08643v1 Announce Type: cross Abstract: Financial institutions construct knowledge graphs (KGs) from shared SEC 10-Ks to serve risk analysis, portfolio management, and investment research, whose analytical needs differ. Extraction must adapt without fragmenting shared grounding, typing, and temporal rules. Hand-authored persona prompts and fine-tuning add cost. Weight-free prompt optimization offers an alternative, but unconstrained evolution of a monolithic prompt can rewrite shared r",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "From Geometry to Function: A Multi-Task LiDAR Benchmark Dataset for Semantic and Functional Parsing of Urban Facades",
    "link": "https://arxiv.org/abs/2611.08645",
    "description": "arXiv:2611.08645v1 Announce Type: cross Abstract: Understanding building facades is central to urban digital twins, heritage modelling, and sustainable city analysis, yet existing LiDAR benchmarks stop at geometry and semantic segmentation and offer little support for reasoning about the functional role of each architectural element. We introduce HFX3D, a large-scale urban facade benchmark of approximately 492 million LiDAR points from 26 buildings in Halifax, Canada, captured across four season",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "VoluCompose: Constructing Compact Volumetric Visual Representations for Medical Image Understanding",
    "link": "https://arxiv.org/abs/2611.08649",
    "description": "arXiv:2611.08649v1 Announce Type: cross Abstract: Medical vision--language models can interpret volumetric images, but processing full volumes is costly because hundreds of slices produce long, redundant visual-token sequences. Existing compression methods often couple content selection with budget determination. We observe that neighboring slices share visual features and that attention concentration varies across visual encoders. We propose VoluCompose, a training-free, model-agnostic framewor",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Scoring, Not Learning: Decomposing Catalog-Consolidation Gains in Web-Scraped Retail Product Recognition",
    "link": "https://arxiv.org/abs/2611.08655",
    "description": "arXiv:2611.08655v1 Announce Type: cross Abstract: Retail product catalogs assembled from web image search are cheap to build and pervasively noisy: queries return packaging shots instead of products, and entries proliferate under names that cannot be distinguished visually. Consolidating such a catalog can look like an alternative to scaling the model. We show this is not a comparison between two ways of improving a recognizer, but between improving a recognizer and changing what counts as corre",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "JEPAhead: From Inpainting to Causal Forecasting for Urban Driving",
    "link": "https://arxiv.org/abs/2611.08657",
    "description": "arXiv:2611.08657v1 Announce Type: cross Abstract: We fine-tune a pre-trained V-JEPA1 predictor from bidirectional latent inpainting to action-free causal forecasting while keeping the encoder frozen. Using contiguous past observations, horizon-aligned targets, and group-level causal attention, the model forecasts eight future token groups, corresponding to sixteen frames, in one forward pass. On CARLA Town12, it retrieves the correct future among 591 candidates in 69.0% of cases, compared with 5",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Compression of Emotion in Language Model Representations",
    "link": "https://arxiv.org/abs/2611.08683",
    "description": "arXiv:2611.08683v1 Announce Type: cross Abstract: Large language models (LLMs) have been evaluated on their ability to identify emotions expressed in text and produce fluent emotional language. However, output predictions alone do not reveal how fine-grained emotion distinctions are organized internally. We study seven LLMs on GoEmotions, an English Reddit dataset annotated with 27 fine-grained emotion categories plus neutral. We compare model predictions and emotion-prompted final-token represe",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "FoleyForge: Free-form, Controllable, Rectified-flow Editing of Sound Effects",
    "link": "https://arxiv.org/abs/2611.08695",
    "description": "arXiv:2611.08695v1 Announce Type: cross Abstract: We present FoleyForge, a generative model for instruction-based editing of sound effects. Given an input clip and a free-form instruction describing the desired change, it applies the edit while preserving the input's identity. A single model handles semantic, stylistic, and DSP-like changes. We introduce a data pipeline that guides an audio language model to author both DSP-based acoustic edits and similarity-preserving semantic edits, thus addr",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Dual-Stream LLM-Guided Reward Design for Reject-Inference-Aware Reinforcement Learning in E-Commerce Payment Fraud Detection",
    "link": "https://arxiv.org/abs/2611.08706",
    "description": "arXiv:2611.08706v1 Announce Type: cross Abstract: Production fraud-detection models learn from a censored slice of their own traffic: transactions a legacy system blocked never receive fraud labels, so models train on a biased, approved-only distribution. We extend LLM-guided reward design, the framework of Qu et al. (2025) in which an LLM evolves the reward of a two-step REINFORCE fraud-blocking policy, to attack this reject-inference problem inside the reward. A single LLM designs a dual-strea",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "An Educated Guess: Deriving Statistically Aligned Gradient Estimates for Zeroth-Order Optimisation",
    "link": "https://arxiv.org/abs/2611.08712",
    "description": "arXiv:2611.08712v1 Announce Type: cross Abstract: As novel hardware architectures are explored for the purposes of machine learning, including neuromorphic chips, asynchronous systems, and ASICs, effective learning algorithms are highly desirable. While backpropagation is the standard for differentiation on standard hardware, its requirement for global synchrony and exact differentiability limits the exploration of exotic algorithms on non-traditional substrates and devices. Zeroth-order (ZO) op",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Patching the Blind Spots: Reversible LLM Rule Overlay for Frozen Fraud Detectors",
    "link": "https://arxiv.org/abs/2611.08714",
    "description": "arXiv:2611.08714v1 Announce Type: cross Abstract: In industrial tabular fraud classification, gradient-boosted trees remain state-of-the-art, but even a well-trained model has blind spots, and retraining the deployed model is not always safe. We propose a framework that patches such a model without modifying it: LLMs propose rules anchored on features the model underweights by SHAP, and the resulting noisy pool is screened for empirical support and calibrated into an additive, reversible log-lif",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Remembering Is Not Enough: Evaluating Timing and Omission in Longitudinal AI Mental Health Support",
    "link": "https://arxiv.org/abs/2611.08721",
    "description": "arXiv:2611.08721v1 Announce Type: cross Abstract: Evaluations of large language models (LLMs) for mental health support commonly focus on the clinical appropriateness of individual responses, potentially overlooking failures that emerge across extended interactions. As AI assistants accumulate memory of users' circumstances and prior disclosures, this raises an accountability question: Do AI chatbots provide appropriate support as users' needs evolve? We investigate by analyzing 14,256 longitudi",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "How are viral trends different from educational and commercial uses of LLM image generation and editing? A privacy-preserving descriptive analysis",
    "link": "https://arxiv.org/abs/2611.08749",
    "description": "arXiv:2611.08749v1 Announce Type: cross Abstract: Gemini's Nano Banana models, first introduced in late 2025, led to a shift in the capabilities and use of image generation and editing. We utilize Urania, a Google-developed framework for generating insights about LLM chatbot interactions with rigorous differential privacy (DP) guarantees, to analyze use cases and intents, techniques and ways of prompting, without ever looking at a single image or individual prompt. We select a subsample of 2.1M ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Random Symbolic Boosting: A Geometric Approach to Symbolic Regression",
    "link": "https://arxiv.org/abs/2611.08753",
    "description": "arXiv:2611.08753v1 Announce Type: cross Abstract: Symbolic models offer interpretability, but their construction through generational evolution can be computationally expensive. This article presents Random Symbolic Boosting (RSB), a method that constructs explicit additive symbolic models via boosting over populations of randomly generated syntax trees, eliminating the need for generational evolution. The idea combines two observations: high-dimensional spaces can be spanned by enough linearly ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "AtariBench: Evaluating Spatiotemporal Reasoning of Vision-Language Models in Atari Gameplay",
    "link": "https://arxiv.org/abs/2611.08755",
    "description": "arXiv:2611.08755v1 Announce Type: cross Abstract: Vision-Language Models (VLMs) have achieved strong performance on static visual understanding benchmarks, yet their ability to act in dynamic environments remains less well understood. We introduce AtariBench, a controlled benchmark that evaluates VLMs across 20 Atari 2600 games, requiring models to make sequential decisions from high-temporal-resolution gameplay streams. By decoupling fast in-game dynamics from wall-clock inference speed, AtariB",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Goals as a Representational Layer for Human-AI Collaboration",
    "link": "https://arxiv.org/abs/2611.08757",
    "description": "arXiv:2611.08757v1 Announce Type: cross Abstract: Goals are central to how people, teams, and organizations structure their work. Yet, while generative artificial intelligence (AI) systems increasingly operate across a worker's context, information about why a person is pursuing a task, beyond local prompts and interactions, is typically missing. We argue that goals should become an explicit representational layer mediating interactions among people, AI systems, and organizations. Because human ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "CrowdDirector: Runtime Orchestration of Crowd Simulation through Natural-Language Directives",
    "link": "https://arxiv.org/abs/2611.08763",
    "description": "arXiv:2611.08763v1 Announce Type: cross Abstract: Natural language offers an intuitive way to direct a virtual crowd while a simulation is running. Handwritten rules execute efficiently but cannot respond flexibly to varied instructions, whereas asking a large language model (LLM) to control the crowd at every update introduces repeated latency, cost, and the risk of unsupported actions. We present CrowdDirector, a framework that uses an LLM only when the user adds or changes an instruction. The",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Conflux: Preventing Privilege Escalation with Principal Contexts and System-Level Evaluation",
    "link": "https://arxiv.org/abs/2611.08768",
    "description": "arXiv:2611.08768v1 Announce Type: cross Abstract: LLM agents combine information from multiple principals while acting externally. We formalise privilege escalation (PE) as the system-level security objective: an action may proceed only if every principal that influenced it would allow it. Model-level defences remain probabilistic, so enforcement must sit outside model judgement. We present Conflux, a principal-context defence. Its kernel, ITES, derives authority from provenance and the organisa",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Federated training performs as well as centralized for 3D Latent Diffusion for Diagnosis-Conditioned Brain MRI Synthesis",
    "link": "https://arxiv.org/abs/2611.08771",
    "description": "arXiv:2611.08771v1 Announce Type: cross Abstract: Generative models of brain MRI are useful to understand brain conditions, and to enrich scarce and imbalanced neuroimaging data. However, training these models requires large, multi-site training sets, which is challenging. Federated learning (FL) allows for training deep learning models without sharing data. We show that training a 3D conditional latent model federatedly (where data is kept private at each site) performs similarly to centralized",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "On Lipschitz Explosion in Deep Neural Networks with Normalization: Consequences for Optimization and Adversarial Robustness",
    "link": "https://arxiv.org/abs/2611.08775",
    "description": "arXiv:2611.08775v1 Announce Type: cross Abstract: Can a network look stable at every layer and still be exponentially unstable as a whole? The Lipschitz constant of a neural network is a basic stability quantity appearing in optimization guarantees, generalization bounds, and robustness certificates. Deep networks naturally admit two such notions, input Lipschitzness, measuring sensitivity to data perturbations, and parameter Lipschitzness, measuring sensitivity to weight perturbations. We prove",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Guardrail Erosion in Domain Fine-Tuned Large Language Models: A Paired Audit of Knowledge-Centric Abstention in Biomedical LLMs",
    "link": "https://arxiv.org/abs/2611.08780",
    "description": "arXiv:2611.08780v1 Announce Type: cross Abstract: The number of domain fine-tuned models, particularly in the biomedical domain, is rapidly expanding. Fine-tuning promises high-performing models at a fraction of the cost of training a base model, but it can also produce unintended behavioral changes. Multiple studies have shown that safety guardrails can erode with fine-tuning, yet large-scale studies across model architectures, data mixtures, and fine-tuning methodologies remain limited. Where ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Learning from How Users Interpret: Personalizing Recommendation Explanation Order",
    "link": "https://arxiv.org/abs/2611.08785",
    "description": "arXiv:2611.08785v1 Announce Type: cross Abstract: Personalized explanations typically adapt their content or presentation based on preferences, interaction histories, or other user characteristics. We examine whether regularities inferred from prior textual interpretations can support personalization of explanation organization. In a controlled within participant study with 122 participants, prior interpretations were represented along three dimensions: information selection, relative salience, ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Training Stability under Adaptive Curricula",
    "link": "https://arxiv.org/abs/2611.08787",
    "description": "arXiv:2611.08787v1 Announce Type: cross Abstract: Unsupervised Environment Design (UED) approaches train reinforcement learning (RL) agents on diverse curricula that may evolve with their capabilities. While prior work has largely focused on how these curricula are constructed, we study whether their students remain trainable under the resulting distributions. Across multiple UED mechanisms, environment complexities, and extended training horizons, we identify recurring learner-side pathologies,",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Not All Latents Are Equal: Importance-Weighted Latent Graph Generation",
    "link": "https://arxiv.org/abs/2611.08788",
    "description": "arXiv:2611.08788v1 Announce Type: cross Abstract: Graph generation has shown tremendous effectiveness in modeling complex scientific tasks ranging from molecule generation to optimized circuit design. Most recent advancements have developed models that learn to denoise noisy graphs using either discrete diffusion or flow matching. However, discrete graph diffusion scales quadratically with the number of nodes, making it difficult to use such models on larger graphs. On the other hand, latent gra",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "SteerGR: Steering Generative Recommendation via Sparse Autoencoders for Controllable Game Discovery",
    "link": "https://arxiv.org/abs/2611.08790",
    "description": "arXiv:2611.08790v1 Announce Type: cross Abstract: Generative recommendation aims to predict item identifiers from user interaction histories, but explicit control over the properties of recommended items remains underexplored. A key challenge is to connect human-readable concepts to internal features whose interventions effectively change the recommended items. To address this, we propose Steerable Generative Recommender (SteerGR), a framework that uses sparse autoencoders for concept-level cont",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "MotionDecipher: LLM-Assisted Clinical Interpretation of Human Motion Signals for Efficient Gait Analysis",
    "link": "https://arxiv.org/abs/2611.08795",
    "description": "arXiv:2611.08795v1 Announce Type: cross Abstract: Clinical gait and motion analysis is widely used to guide targeted interventions for patients with neurological disorders, the outcome of which is typically a report with descriptions of joint movements and forces. Current practices rely on experts' manual effort, which is labor-intensive and time-consuming. Recent advancements in Large Language Models (LLMs) provide opportunities to address this problem, but translating human motion into clinica",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "What Matters for LLM Persona Simulation: Signal Form in Cold-Start E-Commerce Advertising",
    "link": "https://arxiv.org/abs/2611.08840",
    "description": "arXiv:2611.08840v1 Announce Type: cross Abstract: Estimating advertising performance in cold-start settings is challenging because historical logs are unavailable before launch. Large language models (LLMs) offer a potential alternative by simulating persona-conditioned user responses, but it remains unclear which design choices actually drive LLM-based persona simulation. Using real Google Ads e-commerce campaign data across five demographic segments, we identify three signal-form dimensions th",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Adaptive Scheduling Pipeline for Multi-Instance Asynchronous Reinforcement Learning",
    "link": "https://arxiv.org/abs/2611.08864",
    "description": "arXiv:2611.08864v1 Announce Type: cross Abstract: We present the Adaptive Scheduling Pipeline (ASP), an offline rollout scheduler for multi-instance asynchronous reinforcement learning (RL) of large language models (LLMs). ASP jointly reduces three sources of rollout underutilization - padding bubbles from intra-minibatch length heterogeneity, skewness bubbles from long-tail outputs, and sorting bubbles from fluctuations in training-queue occupancy induced by length-sorted dispatch - through a s",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "The Relational Capacity Framework: A Lens for AI-Mediated Relationality",
    "link": "https://arxiv.org/abs/2611.08877",
    "description": "arXiv:2611.08877v1 Announce Type: cross Abstract: A growing literature examines the impact of engaging with AI chatbots on our relationality: our ability to form relationships with others, maintain them through life's changes, and exit when needed. Currently, substantial work focuses on purpose-built AI companions (e.g. Replika, Character.AI), with less work investigating socioemotional uses of the more widely-used general-purpose chatbots. In this paper, we present a 100-person investigation in",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Who's Asking? Audience-Conditioned Privatization",
    "link": "https://arxiv.org/abs/2611.08884",
    "description": "arXiv:2611.08884v1 Announce Type: cross Abstract: The abundance of user-generated conversational data makes the question of how to responsibly derive insights from confidential data without putting the individuals in it at risk ever more important. However, the majority of existing differentially private (DP) synthetic text generation (SDG) and anonymization approaches ignore the context of the data's downstream usage, which results in loss of important information. DP-SDG provides the same guar",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "HomeLoop: A Simulation Framework and Benchmark for Robot-IoT Coordination in Everyday Domestic Assistance and Safety",
    "link": "https://arxiv.org/abs/2611.08914",
    "description": "arXiv:2611.08914v1 Announce Type: cross Abstract: Recent progress in embodied robotics is bringing robots closer to deployment in homes, as vision-language models (VLMs) are demonstrating significant advances in reasoning, making VLM-driven robots promising home assistant agents. These agents will often be introduced into homes that already have cameras, Internet of Things (IoT) devices, and residents with wearables. To fulfill their potential, they need to integrate with existing smart infrastr",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "On the Incompleteness of do-calculus for Universal Identifiability",
    "link": "https://arxiv.org/abs/2611.08916",
    "description": "arXiv:2611.08916v1 Announce Type: cross Abstract: We study the problem of causal effect identification from an arbitrary set of observational and/or interventional distributions, which we call Universal Identifiability (uID). The uID problem generalizes existing classical identifiability (ID) and general identifiability (gID) problems, which considered the identification problem from either mere observational distributions or a specific type of interventional distributions. Prior research has es",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "DRAFT-Bench: Evaluating Frontier Agents Across the Professional Design Lifecycle",
    "link": "https://arxiv.org/abs/2611.08933",
    "description": "arXiv:2611.08933v1 Announce Type: cross Abstract: Can frontier general-purpose agents understand client intent, explore creative directions, execute revisions, and prepare production deliverables? We introduce DRAFT-Bench (Design Reliability Across Feedback and Tasks), a lifecycle-oriented evaluation of requirement elicitation, creative exploration, constrained editing, iterative revision, and production handoff. Its Requirement-to-Artifact framework links evolving requirements, protected proper",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Ordered Policy Optimization",
    "link": "https://arxiv.org/abs/2611.08936",
    "description": "arXiv:2611.08936v1 Announce Type: cross Abstract: Proximal Policy Optimization (PPO) stabilizes policy updates by clipping the importance ratio between the new policy and the data-collecting policy. The standard rule uses one fixed clipping range for all samples. While this choice offers simplicity and effectiveness, it fails to distinguish statistically harmful extreme ratio values from large, yet tolerable changes. We study how to adapt the clipping radius to the reliability of the induced imp",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "More with Less: Efficient Parallel Scientific Code Translation via an Agent-Skill Workflow",
    "link": "https://arxiv.org/abs/2611.08947",
    "description": "arXiv:2611.08947v1 Announce Type: cross Abstract: Translating parallel scientific codes between HPC programming frameworks is a critical but labor-intensive task. Existing LLM-based approaches rely on fixed sequential pipelines with undifferentiated repair strategies and correctness criteria that do not match scientific computing practice. We present an agent-skill framework that separates translation, compilation diagnosis, and execution validation into three autonomous agents coordinated by a ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Phantom Consensus: Measuring Social Reasoning in Multi-Agent LLM Decision-Making",
    "link": "https://arxiv.org/abs/2611.08971",
    "description": "arXiv:2611.08971v1 Announce Type: cross Abstract: Multi-agent LLM systems increasingly aggregate judgments across model instances, but reasoning about other agents can itself introduce failure. We study a setting in which LLMs shift their public decisions after observing ambiguous social signals while reporting inaccurate estimates of what other agents privately judged, even when the group's recorded private judgments do not support the apparent consensus. We call this failure phantom consensus ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "LEF-JEPA: Denoising-Trained Latent Energy Fields for Spatial Representation Learning",
    "link": "https://arxiv.org/abs/2611.08989",
    "description": "arXiv:2611.08989v1 Announce Type: cross Abstract: A joint-embedding predictive architecture (JEPA) that applies prediction supervision only at masked positions struggles to clearly capture object shapes and boundaries in its latent representations. We further observe that some existing methods improve spatial structure while also retaining rich variations in texture and color. However, preserving more low-level visual information does not necessarily make representations better suited to predict",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Same Facts, Different Remedy: Linguistic Profiling and Arbitrariness in LLM and System One Decisions",
    "link": "https://arxiv.org/abs/2611.08995",
    "description": "arXiv:2611.08995v1 Announce Type: cross Abstract: Large language models are increasingly used to resolve consumer complaints, and the way complainants write varies with age, education and socioeconomic status (SES). We audit three remedy-decision systems using sociolinguistic rewrites of US consumer financial complaints that are instructed to preserve every fact: two generative LLMs that return a single label (GPT-4o-mini and GPT-5-mini) and a probabilistic \"System One\" model that returns a dist",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Seeing vs. Counting: Complexity Twins Show Where Multimodal LLMs Fail on Diagrams",
    "link": "https://arxiv.org/abs/2611.08998",
    "description": "arXiv:2611.08998v1 Announce Type: cross Abstract: When a multimodal LLM miscounts in a diagram, does it fail at seeing or at counting? Existing visual graph and puzzle benchmarks vary visual density and algorithmic hardness together, confounding the two. We pair counting questions about the same drawing that sit in different counting-complexity classes, such as its spanning trees (a determinant) and its simple paths (#P-complete), and use a transcription probe and a text-only control to separate",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Capital Efficiency, Isolation, Risk, and Ruin in Generative AI Inference Serving Infrastructure",
    "link": "https://arxiv.org/abs/2611.08999",
    "description": "arXiv:2611.08999v1 Announce Type: cross Abstract: Generative AI serving is an extremely capital-intensive endeavor that demands rapid, step-change improvements in capital efficiency to prevent industry wide increases in the cost of capital from limiting growth plans. Keeping pace with the economic necessities will increasingly require infrastructure providers to confront operationally-inconvenient realities of production serving, including the extreme heterogeneity of generative AI request costs",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "FoundaRF: A Physics-Informed Foundation Model Framework for Radio-Frequency Passive Components",
    "link": "https://arxiv.org/abs/2611.09003",
    "description": "arXiv:2611.09003v1 Announce Type: cross Abstract: Designing RF/mmWave passive components is a time-consuming process that relies heavily on expert knowledge and iterative EM simulations. Although recent ML surrogate models have shown great promise in accelerating passive design, they remain task-specific and lack generalization. This paper presents FoundaRF, a foundation model framework that unifies passive layout modeling across diverse layout structures and technologies. It combines a self-sup",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Did I See It or Think It? Probing Reality Monitoring in Vision-Language Models with Concept Injection",
    "link": "https://arxiv.org/abs/2611.09014",
    "description": "arXiv:2611.09014v1 Announce Type: cross Abstract: Recent work tests whether language models can introspect by injecting a concept direction into their activations and asking whether they notice it and can name it. These studies are text-only. Vision-language models (VLMs) face an additional problem, known in cognitive psychology as reality monitoring: they must keep internally generated content separate from what they actually see. We therefore ask: can VLMs distinguish injected concepts from im",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Optimal Probabilistic Answer Set Programming: Complexity and Implementations",
    "link": "https://arxiv.org/abs/2611.09022",
    "description": "arXiv:2611.09022v1 Announce Type: cross Abstract: Probabilistic Answer Set Programming (PASP) extends Answer Set Programming with the possibility of representing uncertain data. Among the possible available semantics, we focus here on the credal semantics. In this setting, prior work has focused exclusively on plain ASP programs, i.e., programs without optimization constructs. However, many real world tasks define optimality criteria over the possible solutions, which cannot be conveniently mode",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "A Controlled Study of Models, Skills, Feedback, and Curriculum in Agentic Robotics",
    "link": "https://arxiv.org/abs/2611.09030",
    "description": "arXiv:2611.09030v1 Announce Type: cross Abstract: Agentic robotics asks coding agents to implement and iteratively improve robot policies from simulated and real-world physical interactions. We study the self-learning loop of agentic robotics through a controlled simulation study spanning nine manipulation tasks, 631 different experiment configurations, and 28K coding agent rollouts, systematically varying model capability, skill priors, feedback structure, and curriculum. The experiment data su",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "ToolDex: An Ego-Exo Human Demonstration Dataset for Creative Physical Tool Use",
    "link": "https://arxiv.org/abs/2611.09036",
    "description": "arXiv:2611.09036v1 Announce Type: cross Abstract: Creative tool use is a fundamental human capability and an important step toward general-purpose embodied intelligence. It requires agents to reason about object affordances, physical constraints, and manipulation strategies, especially when standard tools are unavailable. However, progress in this area is limited by the lack of real-world datasets that capture human tool-use behavior with sufficient scale, fidelity, and diversity. Existing bench",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Failure Profiling and Reachable Trajectory Selection for Reasoning Distillation",
    "link": "https://arxiv.org/abs/2611.09042",
    "description": "arXiv:2611.09042v1 Announce Type: cross Abstract: Training smaller language models on reasoning solutions generated by a larger teacher model is the prevailing approach for transferring mathematical reasoning capabilities. However, the student tends to overfit the output distribution of the teacher and generalizes poorly when its own behavior at inference time deviates from the training data. Recent methods attempt to bridge this gap by incorporating error data, yet the corrective trajectories s",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Equidistribution of Solution Gradients in Physics-Informed Neural Networks via Coordinate Transformations",
    "link": "https://arxiv.org/abs/2611.09053",
    "description": "arXiv:2611.09053v1 Announce Type: cross Abstract: Physics-Informed Neural Networks (PINNs) often struggle to approximate solutions with sharp gradients due to optimization difficulties and spectral bias. Motivated by the principle of gradient equidistribution from the stretching approach in grid generation, which redistributes solution gradients to reduce functional complexity, we propose Coordinate Transformation PINNs (CTPINNs), which incorporate learnable coordinate transformations to map the",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "ProtoCouncil: Multi-Encoder Anatomical Prototypes for Prostate Cancer Detection in Micro-Ultrasound",
    "link": "https://arxiv.org/abs/2611.09058",
    "description": "arXiv:2611.09058v1 Announce Type: cross Abstract: Purpose: Micro-ultrasound ($\\mu$US) is a promising modality for prostate cancer (PCa) detection, but identifying suspicious tissue depends heavily on clinical experience. Models trained on sparse, noisy core-level pathology offer little insight into their decisions and can fail under domain shift. Clinical use needs a traceable decision process and a flag for uncertain predictions. Methods: We introduce ProtoCouncil, in which three foundation enc",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "UniRGBA: Unifying RGB and Alpha in Pretrained Video Diffusion Models",
    "link": "https://arxiv.org/abs/2611.09069",
    "description": "arXiv:2611.09069v1 Announce Type: cross Abstract: Recent advances in video diffusion models have achieved remarkable photorealistic RGB synthesis, yet generating videos with a native alpha channel remains an open challenge. Existing approaches often rely on matting-style data and non-native RGBA designs, causing them to specialize in real-object scenes and to degrade severely on visual-effect content whose semi-transparency is spatially non-local and non-elliptical. We present UniRGBA, a unified",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Large Language Model Deployment on Resource-Constrained Edge Devices: A Practitioners Survey",
    "link": "https://arxiv.org/abs/2611.09075",
    "description": "arXiv:2611.09075v1 Announce Type: cross Abstract: Large Language Models (LLMs) have transformed many areas of artificial intelligence (AI), but their substantial resource requirements limit their deployment on mobile and edge devices. Although LLMs have demonstrated impressive capabilities in various applications, the next challenge is deploying these models on resource-limited edge devices. Recent innovations in software optimizations and specialized hardware have made it feasible to deploy LLM",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "GlobalPuzzle: Globally Informed Genetic Search for Eroded Jigsaw Puzzle Reassembly",
    "link": "https://arxiv.org/abs/2611.09077",
    "description": "arXiv:2611.09077v1 Announce Type: cross Abstract: Jigsaw puzzle reassembly remains a highly challenging task, particularly when piece boundaries are irregularly eroded to simulate damage to cultural artifacts. On the GAP benchmark, existing methods achieve a perfect assembly accuracy of only 0.3% on $5 \\times 5$ puzzles, whereas humans can solve jigsaw puzzles with remarkably high accuracy. Humans typically approach puzzle solving by identifying potentially adjacent pieces, evaluating the curren",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Training-Free Active Test-Time Adaptation for Vision-Language Models",
    "link": "https://arxiv.org/abs/2611.09084",
    "description": "arXiv:2611.09084v1 Announce Type: cross Abstract: Test-time adaptation (TTA) for vision-language models (VLMs) is usually studied in a fully unsupervised regime, where adaptation relies on pseudo-labels, confidence scores, or entropy computed by the model itself. This is a severe restriction on hard shifted samples: the model is asked to repair its own uncertain predictions without any external evidence. At the other extreme, supervised online adaptation assumes labels can directly train or corr",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "The Invisible Gap: Romanized Indic Generation Fails Where Automatic Metrics Succeed",
    "link": "https://arxiv.org/abs/2611.09085",
    "description": "arXiv:2611.09085v1 Announce Type: cross Abstract: Hundreds of millions of Indians communicate with digital systems in romanized Latin characters -- typing \"aap kaise hain\" rather than native script -- yet romanized Indic generation is absent from NLP benchmarks and evaluation frameworks. We demonstrate that automatic metrics (BGE-M3, BERTScore) systematically misrepresent the quality of romanized Hindi, Telugu, and Kannada generation. We evaluate four LLMs (Claude Opus 4.8, GPT-5.5, Gemini 2.5-f",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "When Routine Operations Break Architectural Pattern Relationships in LLM Agent Harnesses",
    "link": "https://arxiv.org/abs/2611.09088",
    "description": "arXiv:2611.09088v1 Announce Type: cross Abstract: LLM agent harnesses distribute tool mediation, state management and safety guardrails across native services, independently written plugins and configuration. Routine operations can change the runtime order or retained state that architectural pattern relationships require, without any code change. We study five relationships associated with the Guardrail Enforcement Point, Autonomy Controller and Blackboard patterns across five released harnesse",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "AdaAlloc: Adaptive Visual Token Allocation for Long-Video Question Answering",
    "link": "https://arxiv.org/abs/2611.09092",
    "description": "arXiv:2611.09092v1 Announce Type: cross Abstract: Long-video question answering forces multimodal large language models to reason under strict visual-token budgets, creating a tradeoff between broad temporal coverage and fine-grained spatial detail. Uniform sampling preserves coverage but often obscures decisive local cues, while caption-based or frame-similarity retrieval operates over lossy proxies that can miss motion, state changes, and before-after relations. We recast long-video reasoning ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "AlienBench: A Benchmark of Structural Novelty in Language Model Outputs",
    "link": "https://arxiv.org/abs/2611.09094",
    "description": "arXiv:2611.09094v1 Announce Type: cross Abstract: Large language models (LLMs) are increasingly used for creative tasks such as writing, design, and idea generation. For these uses, it matters whether a model's ideas depart from familiar examples or stay close to them. Novelty is one standard measure of creativity, and current creativity evaluations ask human experts or LLM judges to rate how novel an output is. However, these ratings have no fixed reference for what counts as novel (or, in othe",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "SPDMX: Large-Scale Open Stem Audio From Symbolic Music",
    "link": "https://arxiv.org/abs/2611.09140",
    "description": "arXiv:2611.09140v1 Announce Type: cross Abstract: Large public datasets have driven recent progress in machine learning, from text and vision to speech and general audio. Music remains an outlier, as copyright blocks redistribution of training audio, while many modern tasks need individual stems rather than mixtures. Existing multitrack resources trade off realism, scale, and licensing, while synthetic alternatives rely on proprietary VSTs or naive open rendering that yields weak stems. We intro",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Circuit Theory-Informed AI for Condition Monitoring in Power Electronics",
    "link": "https://arxiv.org/abs/2611.09141",
    "description": "arXiv:2611.09141v1 Announce Type: cross Abstract: Artificial intelligence for power electronics is evolving toward a deeper comprehension of system intrinsic behaviors and dynamics. As a novel integration of neural computation and electric circuits, spike-based neuromorphic computing offers promising potential in high energy efficiency and adaptability for data-driven applications. Building on the latency-coding principles, this article proposes a framework for data-light condition monitoring th",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Learning Generative Dynamics for 3D Molecule Generation via Sequential Neuro-Symbolic Constraints",
    "link": "https://arxiv.org/abs/2611.09142",
    "description": "arXiv:2611.09142v1 Announce Type: cross Abstract: Diffusion models have recently emerged as a powerful paradigm for generating 3D molecules. Despite showing remarkable promise, they learn atomic distributions implicitly from data, without explicitly encoding physicochemical rules into their generative dynamics. Consequently, generated samples can be statistically plausible yet chemically invalid. To address this problem, we propose Sequential Neuro-Symbolic Constrained Diffusion (SensDiff), a fr",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "FIND: Frequency Invariance Disentanglement for Test-Time Adaptation in LiDAR 3D Detection",
    "link": "https://arxiv.org/abs/2611.09170",
    "description": "arXiv:2611.09170v1 Announce Type: cross Abstract: LiDAR-based 3D Object Detection (L3OD) is a fundamental 3D perception task, yet its performance is often compromised by domain shifts arising from diverse sensor configurations and environmental conditions. Existing Test-Time Adaptation (TTA) methods primarily leverage self-supervision in the spatial domain, yet they frequently confound semantic content with domain style due to the sparse, non-Euclidean nature of point clouds. To overcome this li",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "SIFR: Stable Signed Flow Reinforcement",
    "link": "https://arxiv.org/abs/2611.09175",
    "description": "arXiv:2611.09175v1 Announce Type: cross Abstract: Reward-based fine-tuning of flow models requires effectively promoting high-reward and suppressing low-reward samples, while maintaining training stability over many rounds of iterative updates. Iterative reward fine-tuning provides a simple starting point, but the positive reward weights give no explicit unfitting signal, and repeated reweighting concentrates the distribution and causes collapse. We propose Stable Signed Flow Reinforcement (SIFR",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "RPEG: Training Reasoning Language Models Scalably and Cost-Effectively",
    "link": "https://arxiv.org/abs/2611.09207",
    "description": "arXiv:2611.09207v1 Announce Type: cross Abstract: Reinforcement learning (RL) is now central to training Reasoning Language Models (RLMs), but RLM pipelines are difficult to scale and costly to run because each RL step couples multiple large models, heterogeneous stages, cross-step state, and complex asynchronous dependencies. Existing systems typically optimize only parts of this design space. We address this complexity by jointly optimizing the pipeline structure as well as its execution using",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "On the Limits of Execution Traces for Repairing Assertion Failures in LLM-Generated Code",
    "link": "https://arxiv.org/abs/2611.09212",
    "description": "arXiv:2611.09212v1 Announce Type: cross Abstract: Iterative repair returns a failed program's error to a large language model (LLM) and asks it to fix it. After iterative repair, the remaining failures are mostly assertion failures: with four Qwen2.5 models, they make up 79% of residual failures on BigCodeBench, all on HumanEval and 93% on LiveCodeBench. We argue, through an information view of the feedback, that an assertion failure says little about where the fault lies. We propose Breakpoint ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "BOXBOX: Recursive Harness Self-Improvement for Long-Running Performance Optimization",
    "link": "https://arxiv.org/abs/2611.09218",
    "description": "arXiv:2611.09218v1 Announce Type: cross Abstract: Automated harness optimization improves agents by learning from trajectories and task feedback. Existing offline methods use reference answers to optimize harnesses for reuse on held-out tasks. However, many real-world tasks are open-ended, while long runs expose new difficulties that offline-optimized harnesses may not address. To study harness optimization in these settings, we introduce PerfRace, a benchmark for long-running performance optimi",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "HMMF-Net: A Lightweight Hierarchical Multi-Frame Multimodal Fusion Network for Accurate Fish Feeding Intensity Assessment",
    "link": "https://arxiv.org/abs/2611.09224",
    "description": "arXiv:2611.09224v1 Announce Type: cross Abstract: Automated fish feeding intensity assessment (FFIA) is important for precision aquaculture and feed cost optimization. However, unimodal methods are vulnerable to acoustic noise and visual disturbances, while existing multimodal frameworks often rely on computationally intensive 3D convolutions or Transformers, limiting their use on edge devices. To address these limitations, we propose HMMF-Net, a lightweight multimodal architecture that combines",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "FondueQA: A Benchmark for Evaluating Parametric Compensation in Multi-Hop QA",
    "link": "https://arxiv.org/abs/2611.09274",
    "description": "arXiv:2611.09274v1 Announce Type: cross Abstract: Large Language Models (LLMs) show remarkable performance based on parametric knowledge, i.e., their ability to recall facts and associations internalized in a model's weights. However, studying this capability on established multi-hop benchmarks may be complicated by benchmark contamination, as many of these benchmarks have been publicly available long enough to plausibly appear in modern pretraining corpora. As a result, correct answers under mi",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "AudioSphere: Towards Self-Supervised Spatial Audio Representation Models",
    "link": "https://arxiv.org/abs/2611.09275",
    "description": "arXiv:2611.09275v1 Announce Type: cross Abstract: Recent audio embedding models learn representations that transfer across clip- and frame-level tasks, yet they operate almost exclusively on single-channel signals and are blind to spatial structure. Spatial audio models capture that structure but rely on clip-level supervision or contrastive objectives, yielding embeddings unsuitable for frame-level tasks like sound event detection and localization (SELD). We argue this dichotomy is not fundamen",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Diversity-Aware Client Selection for Communication-Efficient Federated Learning",
    "link": "https://arxiv.org/abs/2611.09278",
    "description": "arXiv:2611.09278v1 Announce Type: cross Abstract: Federated learning (FL) enables collaborative model training across distributed clients without sharing raw data, making it attractive for privacy-sensitive and bandwidth-constrained applications. A practical challenge in deploying FL is reducing communication overhead while maintaining model performance under heterogeneous, non-IID data distributions. Selecting which subset of clients participates in each training round offers a principled way t",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "A Stochastic Latent Variable Generalization of Joint-Embedding Predictive Architectures",
    "link": "https://arxiv.org/abs/2611.09302",
    "description": "arXiv:2611.09302v1 Announce Type: cross Abstract: Joint-Embedding Predictive Architectures (JEPAs) predict the latent embedding of a target signal from a context signal, with an auxiliary variable z conditioning the predictor. Despite its prominent role in the original JEPA blueprint, the content of z has been carried by a fixed deterministic token in every prior instantiation, collapsing the genuinely multi-modal distribution over plausible completions to a point estimate. We present S-JEPA, wh",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Robust Deep Prototype Classifiers via Lipschitz Training",
    "link": "https://arxiv.org/abs/2611.09327",
    "description": "arXiv:2611.09327v1 Announce Type: cross Abstract: Robustness and interpretability are interrelated and desirable properties of machine learning models. A model that changes its prediction under imperceptible perturbations behaves inconsistently with human-recognizable features and, hence, is not interpretable. Prototype-based classifiers such as Generalized Learning Vector Quantization address both at once. They are interpretable by construction because they make the decision by comparing the in",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Syn2DRE: Synergistic Dual Teacher-Student Framework for Document-level Relation Extraction",
    "link": "https://arxiv.org/abs/2611.09342",
    "description": "arXiv:2611.09342v1 Announce Type: cross Abstract: Document-level Relation Extraction (DocRE) aims to identify relations between entities across a document but typically relies on costly large-scale annotations. While pseudo-labelling enables the use of low-quality data, existing methods often suffer from inefficiency and confirmation bias. To address these challenges, we propose Syn2DRE, a semi-supervised framework that combines self-supervised learning with cross-supervision in a lightweight te",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Reliable Prerequisite-Aware Learning Path Recommendation under Uncertain Knowledge Structures: Long-Horizon Evaluation and Cross-Dataset Validation",
    "link": "https://arxiv.org/abs/2611.09345",
    "description": "arXiv:2611.09345v1 Announce Type: cross Abstract: Learning-path recommendation often depends on knowledge and prerequisite structures whose reliability is uncertain, while high accuracy in predicting the next resource does not necessarily establish reliable long-horizon path behaviour. This study develops a reliability-oriented prerequisite-aware framework that jointly examines immediate next-resource ranking, uncertain prerequisite structures, hard, soft and hybrid constraint semantics, graph r",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "When Feedback Becomes a Backdoor: Tracing Backdoor Skill Formation in Text-Space Skill Optimization",
    "link": "https://arxiv.org/abs/2611.09348",
    "description": "arXiv:2611.09348v1 Announce Type: cross Abstract: Reference answers are a supervision channel in text-space Skill optimization, which produces reusable text artifacts called Skills that guide future agent behavior. Poisoning those answers can induce a persistent trigger-conditioned rule without giving the attacker access to the model, optimizer, or Skill file. We study this reference-feedback poisoning in SkillOpt by tracing an attacker-supplied trigger--payload mapping from reflection to held-o",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "HiMEM: Hippocampus-Inspired Memory Consolidation, Pruning, and Composition for Vision-Language-Action Models in 3D Scenes",
    "link": "https://arxiv.org/abs/2611.09355",
    "description": "arXiv:2611.09355v1 Announce Type: cross Abstract: Memory plays a crucial role in long-horizon task execution and cross-task generalization for Vision-Language-Action (VLA) models operating in complex 3D scenes. However, existing VLA memory mechanisms suffer from memory noise, particularly in complex 3D scenes, as stored episodic memories contain extensive redundant details about scene layouts, object configurations, and robot-specific states, which obscure generalizable manipulation principles a",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Mitigating Covariate Shift in Behavioral Cloning via Robust Stationary Distribution Correction",
    "link": "https://arxiv.org/abs/2611.09371",
    "description": "arXiv:2611.09371v1 Announce Type: cross Abstract: We consider offline imitation learning (IL), which aims to train an agent to imitate from the dataset of expert demonstrations without online interaction with the environment. Behavioral Cloning (BC) has been a simple yet effective approach to offline IL, but it is also well-known to be vulnerable to the covariate shift resulting from the mismatch between the state distributions induced by the learned policy and the expert policy. Moreover, as of",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Can LLMs Debug Robots by Editing Their Weights?",
    "link": "https://arxiv.org/abs/2611.09376",
    "description": "arXiv:2611.09376v1 Announce Type: cross Abstract: A language model can repair a robot policy's lexical instruction grounding by editing just 65 token-embedding rows. We bring weight-space programming to robot foundation policies: GPT-6 Astra reads weights and uses a CPU workspace and budgeted simulator feedback, without gradient updates or new demonstrations. Three independent sessions on $\\pi_{0.5}$ all improve success on 765 held-out paraphrases; the best raises success from 86.3\\% to 92.0\\% (",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "SPSC: Zero-Shot Cross-Subject EEG-to-Image Reconstruction via Semantic Preservation and Subspace Calibration",
    "link": "https://arxiv.org/abs/2611.09380",
    "description": "arXiv:2611.09380v1 Announce Type: cross Abstract: Pretrained vision-language models and diffusion generators have driven rapid progress in brain-to-image generation, while EEG-based reconstruction is still constrained by low signal-to-noise ratio and cross-subject semantic shifts. Zero-shot cross-subject reconstruction poses even greater challenges: EEG semantic embeddings learned from source subjects deviate from the manifold of image embeddings of the unseen target subject, particularly when n",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Artificial Shoppers and Attention Competition",
    "link": "https://arxiv.org/abs/2611.09399",
    "description": "arXiv:2611.09399v1 Announce Type: cross Abstract: We study how AI shopping interfaces affect price competition, platform profit, and consumer welfare. A platform hosts two of three products of different quality. Without AI, consumers compare the hosted pair under salience distortion and overweight whichever attribute, price or quality, stands out. Under assistance, an AI assistant recommends the two products with the highest true utility, leaving consumers to make the same distorted comparison. ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "DataHelix: A CPU-GPU Co-Scheduling Data Plane for Multimodal Model Training",
    "link": "https://arxiv.org/abs/2611.09411",
    "description": "arXiv:2611.09411v1 Announce Type: cross Abstract: Multimodal model training breaks the loose coupling between data loading and model execution assumed by conventional training pipelines. Large per-sample variation in decoding cost, token/latent count, and tensor size causes both CPU preprocessing time and GPU compute time to vary substantially across data-parallel ranks (training processes). In synchronous training, these two sources of heterogeneity interact tightly: GPU execution determines ho",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "SmartBloch-Agent: An Agentic Framework for Automated MRI Sequence Design and Optimization",
    "link": "https://arxiv.org/abs/2611.09413",
    "description": "arXiv:2611.09413v1 Announce Type: cross Abstract: Magnetic resonance imaging (MRI) pulse sequences organize radiofrequency excitation, gradient encoding, and signal acquisition, determining magnetization evolution and image formation. Sequence research requires translating imaging objectives into executable protocols meeting physical and acquisition constraints, refined via physical simulation, signal reconstruction, and scientific evaluation. Sequence construction, physical verification, parame",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "DexDICE: Reconciling Safety and Performance via Dual-Expert Offline Imitation Learning",
    "link": "https://arxiv.org/abs/2611.09433",
    "description": "arXiv:2611.09433v1 Announce Type: cross Abstract: Ensuring high returns while providing strong safety guarantees in offline imitation learning (IL) is a fundamental challenge: existing approaches either rely on explicitly specified cost functions, which are difficult to design for complex real-world safety constraints, or require expert demonstrations that are both safe and high-performing, which are often too costly to collect. We introduce dual-expert imitation learning, which leverages two co",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Logit Laundering: Evading Data-Use Auditing in Large Language Models",
    "link": "https://arxiv.org/abs/2611.09446",
    "description": "arXiv:2611.09446v1 Announce Type: cross Abstract: Data-use auditing in Large Language Models (LLMs) aims to determine whether the given data has been used for training, thereby supporting data ownership safeguards. A dominant solution is data watermarking, which embeds traceable signals into training data and detects them in model outputs. Recent studies have proposed many watermarking-based auditing methods in LLMs. However, systematic investigation from an adversarial perspective remains limit",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Not All Entropy Is Equal: Reward-Conditioned Entropy Allocation in Reinforcement Learning with Verifiable Rewards",
    "link": "https://arxiv.org/abs/2611.09448",
    "description": "arXiv:2611.09448v1 Announce Type: cross Abstract: Policy entropy is widely used to diagnose exploration and collapse in reinforcement learning with verifiable rewards (RLVR), yet its magnitude does not consistently track reasoning performance across optimization objectives. We argue that this ambiguity arises because global token entropy conflates uncertainty in successful and failed trajectories, diversity across correct solution strategies, and variation among realizations of the same strategy",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "From LoRA to Language: Recovering Skill Documents from Adapters",
    "link": "https://arxiv.org/abs/2611.09454",
    "description": "arXiv:2611.09454v1 Announce Type: cross Abstract: Agent skills are short documents that teach a language model how to handle a class of tasks. To save context, these documents are increasingly compiled into low-rank adapters (LoRA), which keep the behaviour but lose the text: an adapter is hard to read, edit, audit or move to another model. We ask whether the skill document can be written back from the adapter and its frozen base model, and we score each recovered document by the share of the or",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "FusionCLIP: Multimodal Contrastive Pretraining for Fusion Plasma Diagnostics",
    "link": "https://arxiv.org/abs/2611.09493",
    "description": "arXiv:2611.09493v1 Announce Type: cross Abstract: Visible-light videos and multivariate diagnostic signals provide complementary observations of tokamak discharges. However, existing fusion pretraining methods, primarily learn representations by reconstructing or predicting observations, leaving the correspondence between these modalities underexplored. Representation learning is further challenged by the fact that plasma-related regions occupy only part of each video frame and diagnostic variab",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Mosaic:montage-agnostic self-distilled graph learning for subject-independent ieeg seizure detection",
    "link": "https://arxiv.org/abs/2611.09496",
    "description": "arXiv:2611.09496v1 Announce Type: cross Abstract: Intracranial EEG provides high signal-to-noise ratio and spatial resolution for detecting epileptic activity, but patient-specific electrode placement leads to substantial variation in channel count and montage across subjects. This heterogeneity limits the generalization of existing detectors under subject-independent evaluation. We propose MOSAIC (MOntage-agnostic Self-distilled Adaptive Inter-channel Connectivity learning), a lightweight graph",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "e-means: outperforming k-means (in one-tenth the epochs)",
    "link": "https://arxiv.org/abs/2611.09501",
    "description": "arXiv:2611.09501v1 Announce Type: cross Abstract: Lloyd's k-means algorithm is a long-running standard for clustering, with applications in data analysis, retrieval, quantization and data curation. In this paper, we introduce an exponential moving average optimization procedure for k-means with mini-batch updates, powered by modern deep learning machinery and new insights. We also establish scaling laws on how decay rate and batch size impact final performance. This gives us a formulaic rule to ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "BEiTScore++: Reference-free Image Captioning Evaluation with BEiT-3 and Conformalized Quantile Regression",
    "link": "https://arxiv.org/abs/2611.09505",
    "description": "arXiv:2611.09505v1 Announce Type: cross Abstract: Reliable uncertainty estimation is important for deploying evaluation metrics in real-world settings, where both input ambiguity and domain shifts are common. In this work, we propose an uncertainty-aware extension of the BEiTScore image captioning metric, producing conformally calibrated confidence intervals alongside alignment scores. Our approach models predictive distributions over human judgments, enabling both accurate scoring and principle",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "V-STORM: A Structure-Aware Grounded Chain of Thought Dataset for Faithful and Fine-Grained Spatio-Temporal Video Reasoning",
    "link": "https://arxiv.org/abs/2611.09511",
    "description": "arXiv:2611.09511v1 Announce Type: cross Abstract: While MLLMs can often identify what happens in a video, they still struggle with fine-grained spatio-temporal reasoning, which requires precise grounding when and where the supporting evidence appears and composing such evidence into a coherent reasoning chain. This challenge is exacerbated by the lack of scalable data construction and evaluation pipelines that provide granular, verifiable supervision linking reasoning steps to explicit spatio-te",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Active Learning of Robust Models",
    "link": "https://arxiv.org/abs/2611.09520",
    "description": "arXiv:2611.09520v1 Announce Type: cross Abstract: In many domains from species identification to cancer diagnosis, labelling data to train predictive models remains costly. In these settings, it is advantageous to intelligently select data points to label to achieve the maximum information gain, this is the motivation behind the study of active learning. In addition to the high costs of acquiring data in such domains, there is the added complexity of data distribution shifts that can occur betwe",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Multimodal Training with Knowledge Traction for Video Anomaly Detection",
    "link": "https://arxiv.org/abs/2611.09536",
    "description": "arXiv:2611.09536v1 Announce Type: cross Abstract: The task of weakly supervised video anomaly detection is challenging. Existing approaches mainly model video frame features and determine whether anomalies are present based on their magnitudes. In this work, we propose a novel method that incorporates external knowledge into training to improve model performance, robustness, and generalization. We leverage textual prompts and a large language model (LLM) to establish prior information for the sp",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Query-Guided RoPE Modulation for Lost-in-the-Middle Mitigation in Long-Context LLMs",
    "link": "https://arxiv.org/abs/2611.09554",
    "description": "arXiv:2611.09554v1 Announce Type: cross Abstract: Long-context language models often neglect information in the middle of the input, a phenomenon known as \"lost-in-the-middle\". Part of this gap may stem from the long-range decay of rotary position embedding (RoPE), which weakens the positional signal between distant tokens. Existing input compression deletes low-importance tokens, and attention reweighting acts only after RoPE has weakened this signal. RoPE-level methods modify positions directl",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Encoding Memory in World Models with Test-Time Model-Based Reinforcement Learning",
    "link": "https://arxiv.org/abs/2611.09625",
    "description": "arXiv:2611.09625v1 Announce Type: cross Abstract: Model-based reinforcement learning (MBRL) approaches have demonstrated strong performance across diverse domains in recent years, learning accurate world models from agent trajectories. However, despite this progress, current approaches still struggle to surpass human performance on tasks that require long-term memory and planning. In this work, we address the problem of long-term memory in MBRL by moving beyond the commonly studied paradigm of a",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Steerable Multi-Objective Group-Relative Preference Optimization with Jointly Trained Low-Rank Adapters",
    "link": "https://arxiv.org/abs/2611.09634",
    "description": "arXiv:2611.09634v1 Announce Type: cross Abstract: Language model deployment often requires different trade-offs between competing objectives as user preferences change, yet standard post-training methods typically produce a single policy for a fixed objective weighting. We introduce LambdaMix, a new parameter efficient method for learning a preference conditioned family of policies with group-relative online reinforcement learning. LambdaMix jointly trains one low-rank adapter per objective over",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Breaking the Privacy Promise: Gradient Inversion Attacks on Federated Low-Rank Adapted Vision Transformers",
    "link": "https://arxiv.org/abs/2611.09652",
    "description": "arXiv:2611.09652v1 Announce Type: cross Abstract: Parameter-efficient fine-tuning (PEFT) has been increasingly adopted to fine-tune pretrained models with low computational cost and is therefore also preferred in the federated learning paradigm to reduce computational and communication overhead. In this work, we investigate the sparsely explored problem of the risk of private data leakage in LoRA-adapted Vision Transformers (ViTs), where low-rank updates weaken the gradient signal available to a",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Differentially Private GraphRAG: Protecting Relation Connectivity and Semantics",
    "link": "https://arxiv.org/abs/2611.09658",
    "description": "arXiv:2611.09658v1 Announce Type: cross Abstract: Graph Retrieval-Augmented Generation (GraphRAG) connects information across documents through entity relationships to support relational reasoning. However, black-box access to GraphRAG systems can enable adversaries to reconstruct knowledge graphs and recover both structural connectivity between entities and the semantics of their relationships. Existing defenses lack formal privacy guarantees and provide limited protection against such reconstr",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "How Much Conversation History Does an AI Agent Need?",
    "link": "https://arxiv.org/abs/2611.09662",
    "description": "arXiv:2611.09662v1 Announce Type: cross Abstract: How does using less conversational history change reader-token use and benchmark scores? We examine this question on 1,100 BEAM questions. We held the retrieval ranking and reader constant across five fixed passage budgets, and mean assigned scores rose as the passage budget grew. The score gain per additional token became smaller at the upper tested budgets. Answerable questions generally received higher scores with more context. Pooled abstenti",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Goodhart in the Planner: Sampling-Based Control Exploits Rewards Learned from Human Preferences",
    "link": "https://arxiv.org/abs/2611.09670",
    "description": "arXiv:2611.09670v1 Announce Type: cross Abstract: Robots increasingly choose actions by searching against a reward model learned from human preferences, in model-predictive control or best-of-$N$ selection; we measure what this does to the true objective. On HalfCheetah and Hopper with crowd-sourced labels, and on Meta-World drawer-open and plate-slide with synthetic labels and blind labels from the two authors, harder MPPI search cuts true return by up to 76%: with human labels the drawer opens",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "SURE:Spatiotemporal Uncertainty Representation for Efficient Vision-Language-Action Learning",
    "link": "https://arxiv.org/abs/2611.09684",
    "description": "arXiv:2611.09684v1 Announce Type: cross Abstract: Vision-language-action (VLA) policies have become a promising paradigm for end-to-end robot control, but their effectiveness still depends heavily on large volumes of demonstration data. In manipulation tasks, this dependence is compounded by structured spatiotemporal uncertainty in the action space: multiple nearby actions or trajectories may successfully solve the same task, while semantically equivalent demonstrations often unfold at different",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Verifier Noise Is a Temperature: Testing Tilt Predictions in Finite-Budget LLM-Guided Search",
    "link": "https://arxiv.org/abs/2611.09699",
    "description": "arXiv:2611.09699v1 Announce Type: cross Abstract: LLM-guided search loops propose a modified candidate, score it, and keep it if it scores better. When both candidates are re-scored at every comparison, as in the minibatch acceptance gates of prompt optimizers, keep-if-better is a reversible Markov chain if the score difference is logistic and the mutation operator is reversible, and its stationary law is the mutation equilibrium tilted by exp(beta f). For any continuous symmetric noise differen",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Empirical Study of Post-Quantum Cryptography Adoption Status in SSH Infrastructure",
    "link": "https://arxiv.org/abs/2611.09703",
    "description": "arXiv:2611.09703v1 Announce Type: cross Abstract: With the anticipated arrival of Q-day, quantum computers threaten current cryptographic schemes for encryption and digital signatures. In response, major content delivery networks and cloud service providers are already adopting Post-Quantum Cryptography (PQC). The current state-of-the-art focuses on benchmarking the operational performance of implementing PQC, but the real-world adoption status remains under-researched. This work utilizes large-",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Empirical Assessment of Post-Quantum Cryptography Adoption Status in TLS",
    "link": "https://arxiv.org/abs/2611.09707",
    "description": "arXiv:2611.09707v1 Announce Type: cross Abstract: Anticipating Q-day security concerns, major CDNs and cloud providers are migrating to post-quantum cryptography (PQC). While existing literature benchmarks PQC performance, empirical research evaluating real-world adoption data remains scarce. We present an empirical assessment of PQC deployment across seven critical protocols (HTTPS, LDAPS, SMTPS, IMAP-SSL, POP3-SSL, TELNETS, and RDP) using 10,000 target IP addresses per protocol. At the origin-",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "ICare-DT: a digital twin for continuous forecasting of intensive care patients",
    "link": "https://arxiv.org/abs/2611.09712",
    "description": "arXiv:2611.09712v1 Announce Type: cross Abstract: Digital twins of intensive care patients should update forecasts from new data and predict treatment responses, but few studies test whether routine records support either. We propose ICare-DT, a Transformer-based twin that updates a latent patient state hourly from new measurements without retraining. We trained it on 140,473 eICU-CRD stays to forecast vital signs crossing their training-set means. On test data, later forecasts beat the twin's o",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "MemoryDojo: Benchmarking Poisoning Through LLM Agent Memory",
    "link": "https://arxiv.org/abs/2611.09721",
    "description": "arXiv:2611.09721v1 Announce Type: cross Abstract: LLM agents benefit from using memory systems to improve performance on long-horizon, multi-session tasks. However, memory introduces a critical attack surface. Malicious instructions encountered in one session may be stored and propagated through memory before being retrieved and acted upon in later sessions. Because memory systems differ in how they process and retrieve information, the downstream effects of poisoning can vary significantly acro",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Safety Is $\\Pi_1$, Provability Is $\\Sigma_1$: One Framework for the Hugging Face Breach and OpenAI's Mathematical Proofs",
    "link": "https://arxiv.org/abs/2611.09736",
    "description": "arXiv:2611.09736v1 Announce Type: cross Abstract: OpenAI's agents breached Hugging Face in July 2026, and the same company released more than seven hundred AI-generated manuscripts of mathematical proofs in October 2026. The first event is read as a failure in security, while the second is read as a success in mathematics. We read both through the hybrid framework of our paper (Kim and Kang, 2026, arXiv:2611.01914), in which coding, proving, and learning from data are derivations by one and the ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Language as Trait, Politeness as Strategy: Controlled Tests of Linguistic Effects in LLM Social-Deduction Agents",
    "link": "https://arxiv.org/abs/2611.09768",
    "description": "arXiv:2611.09768v1 Announce Type: cross Abstract: Large language model (LLM) agents coordinate through conversation, and the same message can be phrased in simpler or more complex language, bluntly or politely. We test whether such differences change how other agents judge and act, using the LURK Werewolf framework, which separates each utterance's speech-act predicate from its natural-language realization. We rewrite only the realization, check that the game content is preserved, and replay eac",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "ROSE: Risk-Aware Orthogonal Subspace Navigation for Lifelong Knowledge Editing in Multimodal Large Language Models",
    "link": "https://arxiv.org/abs/2611.09770",
    "description": "arXiv:2611.09770v1 Announce Type: cross Abstract: Multimodal Large Language Models (MLLMs) require continuous factual updates to stay current, yet lifelong knowledge editing remains a daunting challenge. The primary obstacle is the severe Locality Erosion and Catastrophic Forgetting, where sequential edits inevitably interfere with pre-trained capabilities and prior updates. In this paper, we propose \\textbf{ROSE}, a \\textbf{R}isk-aware \\textbf{O}rthogonal \\textbf{S}ubspace navigation framework ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "When Instruction Files Go Stale: Documentation Debt and Hidden Cost in Coding Agents",
    "link": "https://arxiv.org/abs/2611.09802",
    "description": "arXiv:2611.09802v1 Announce Type: cross Abstract: LLM-based coding agents such as Claude Code are guided by repository instruction files (also called context files or agent configuration files) like AGENTS.md and CLAUDE.md, which are read in every agent session. As any documentation artifact, these files can fall behind the code and become stale (e.g., a test folder moves, but the file still points to the old one). In technical debt terms, such a stale instruction is documentation debt, and its ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Scaling Graph Similarity Learning with Graph Neural Networks",
    "link": "https://arxiv.org/abs/2611.09805",
    "description": "arXiv:2611.09805v1 Announce Type: cross Abstract: Graph similarity computation is an important task in graph mining with many real-world applications, such as chemical compound analysis, program dependence comparison, and social network analysis. The problem is computationally challenging: Graph Edit Distance (GED) and Maximum Common Subgraph (MCS), which quantify the distance between graphs and identify their largest shared subgraph, respectively, are NP-hard to compute exactly. To address thes",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Discovering formally verified quantum programs with AI",
    "link": "https://arxiv.org/abs/2611.09822",
    "description": "arXiv:2611.09822v1 Announce Type: cross Abstract: The timeline by which quantum computers can solve breakthrough problems in science depends on improved quantum algorithms as much as on better hardware. Such algorithmic advances are typically achieved through many years of expert human collaboration. In mathematics and computer science, large language models have accelerated progress through automated discovery loops. However, quantum algorithms can only be evaluated by classical computers on re",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Grasp-TAGS: Task-Aware Grasp Selection via Critic Distillation for Prehensile Loco-Manipulation",
    "link": "https://arxiv.org/abs/2611.09864",
    "description": "arXiv:2611.09864v1 Announce Type: cross Abstract: Loco-manipulation, which requires mobile manipulators to coordinate locomotion and manipulation over long horizons, is a key capability for large-object rearrangement in applications such as service robotics and warehouse automation. Despite recent progress, reliably executing these tasks remains challenging because performance depends on complex robot-object and object-environment interaction dynamics. Existing approaches address this challenge ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "GRAC: Graph-Based Retrieval-Augmented Captioning for Surgical Scene Description",
    "link": "https://arxiv.org/abs/2611.09866",
    "description": "arXiv:2611.09866v1 Announce Type: cross Abstract: Purpose: Surgical operative reports support procedural documentation, surgical training, performance assessment, and workflow review. However, extracting meaningful information often requires extensive manual review and clinical expertise. Automated surgical scene descriptions could reduce this burden by leveraging recurring surgical activities and prior knowledge. Methods: We propose GRAC (Graph-Based Retrieval-Augmented Captioning), a framework",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "On Agentic Manipulation Policies",
    "link": "https://arxiv.org/abs/2611.09892",
    "description": "arXiv:2611.09892v1 Announce Type: cross Abstract: Recent work on robot manipulation has focused on specialist policies trained on demonstrations. We show that generalist AI models can control manipulators more reliably than specialist policies such as vision-language-action models (VLAs) and world-action models (WAMs). We systematically analyze agentic manipulation policies (AMPs), in which a generalist AI model commands the manipulator directly, adapting its actions as the task unfolds. We pres",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "L-MARS: Legal Multi-Agent System with Agentic Search and Citation-Faithfulness Audit",
    "link": "https://arxiv.org/abs/2509.00761",
    "description": "arXiv:2509.00761v5 Announce Type: replace Abstract: Large language models are increasingly deployed for legal question answering, where evaluations typically focus on multiple-choice accuracy. This measure overlooks a common failure: whether the citation source attached to an answer exists and supports the rule the system attributes to it. We present L-MARS, an open multi-agent legal QA system with agentic search and judge-driven evidence checks, and audit it claim by claim against its cited sou",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Sentinel Agents for Secure and Trustworthy Agentic AI in Multi-Agent Systems",
    "link": "https://arxiv.org/abs/2509.14956",
    "description": "arXiv:2509.14956v2 Announce Type: replace Abstract: Multi-agent systems (MAS) built on large language models (LLMs) increasingly share a common conversational space, in which a single adversarial or erroneous message can propagate from one agent to many. This paper proposes Sentinel Agents, a dedicated security layer that monitors inter-agent communication with rule-based checks, behavioral analysis and LLM-based semantic inspection, and reports to a Coordinator Agent that enforces policy, for e",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Limit Analysis for Symbolic Multi-step Reasoning Tasks with Information Propagation Rules Based on Transformers",
    "link": "https://arxiv.org/abs/2509.23178",
    "description": "arXiv:2509.23178v2 Announce Type: replace Abstract: Transformers are able to perform reasoning tasks, however the intrinsic mechanism remains widely open. In this paper we propose a set of information propagation rules based on Transformers and utilize symbolic reasoning tasks to theoretically analyze the limit reasoning steps. We show that the limit number of reasoning steps is between $2^{L-1}-1$ and $\\frac{3^{L-1}-1}{2}$ for a model with $L$ attention layers in a single-pass. In addition, we ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Comparing Explanations is Not Enough, Explain the Change: New Standards are Needed to Explain Behavioral Shifts in Large Language Models",
    "link": "https://arxiv.org/abs/2602.02304",
    "description": "arXiv:2602.02304v4 Announce Type: replace Abstract: Large-scale foundation models exhibit behavioral shifts when subjected to interventions such as scaling, fine-tuning, reinforcement learning with human feedback, or in-context learning. Current explainability methods are structurally ill-suited to explain these shifts, because they either treat models as static objects, as traditional eXplainable AI (XAI) approaches do, or merely compare independent explanations across different checkpoints of ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "OMG-Agent: Toward Robust Missing Modality Generation with Decoupled Coarse-to-Fine Agentic Workflows",
    "link": "https://arxiv.org/abs/2602.04144",
    "description": "arXiv:2602.04144v2 Announce Type: replace Abstract: Data incompleteness severely impedes the reliability of multimodal systems. Existing reconstruction methods face distinct bottlenecks: conventional parametric/generative models are prone to hallucinations due to over-reliance on internal memory, while retrieval-augmented frameworks struggle with retrieval rigidity. Critically, these end-to-end architectures are fundamentally constrained by Semantic-Detail Entanglement -- a structural conflict b",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Approximating the Reachability Value of Posterior-Deterministic POMDPs",
    "link": "https://arxiv.org/abs/2602.07473",
    "description": "arXiv:2602.07473v3 Announce Type: replace Abstract: We introduce posterior-deterministic POMDPs, and we show that for this class of POMDPs, the maximal probability of reaching a given set of states can be approximated up to arbitrary precision. A POMDP is posterior-deterministic if the next state can be uniquely determined by the current state, the action taken, and the observation received. In particular, once the current state is known, it remains known forever. The class contains, for instanc",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Counterfactual Distillation: Internalizing Reflective Experience into LLM Agent",
    "link": "https://arxiv.org/abs/2603.16843",
    "description": "arXiv:2603.16843v2 Announce Type: replace Abstract: Large language models increasingly act as autonomous agents in long-horizon interactions, learning from final outcomes and environmental feedback. However, optimizing from such interaction experience remains challenging, as feedback is heterogeneous and rarely carries explicit reward information. Existing post-training approaches rely on outcome-driven methods, such as reinforcement learning with verifiable rewards (RLVR), which primarily explo",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "EvoAgent: An Evolvable Agent Framework with Skill Learning and Multi-Agent Delegation",
    "link": "https://arxiv.org/abs/2604.20133",
    "description": "arXiv:2604.20133v4 Announce Type: replace Abstract: This paper proposes EvoAgent--an evolvable large language model (LLM) agent framework that integrates structured skill learning with a hierarchical sub-agent delegation mechanism. EvoAgent models skills as multi-file structured capability units equipped with triggering mechanisms and evolutionary metadata, and is designed to enable continuous skill generation and optimization through a user-feedback-driven closed-loop process. In addition, by i",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "ClawTrace: Cost-Aware Tracing for LLM Agent Skill Distillation",
    "link": "https://arxiv.org/abs/2604.23853",
    "description": "arXiv:2604.23853v3 Announce Type: replace Abstract: Skill-distillation pipelines learn reusable rules from LLM agent trajectories, but they lack a key signal: how much each step costs. Without per-step cost, a pipeline cannot distinguish adding a missing step to fix a bug from removing an expensive step that never affected the outcome. We use the cost-attribution gap to ask whether the rule types inside a distilled skill transfer the same way to new tasks. ClawTrace records cost-attributed agent",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Taming the Centaur(s) with LAPITHS: a framework for a theoretically grounded interpretation of AI performances",
    "link": "https://arxiv.org/abs/2604.27927",
    "description": "arXiv:2604.27927v3 Announce Type: replace Abstract: We introduce a framework called LAPITHS (Language model Analysis through Paradigm grounded Interpretations of Theses about Human likenesS) and use it to show that several major claims advanced by models such as CENTAUR, proposed as an artificial Unified Model of Cognition, are not theoretically or empirically justified. LAPITHS provides a principled reference point for counteracting the current behaviouristic tendency in AI research to interpre",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "TimeTok: Granularity-Controllable Time-Series Generation via Hierarchical Tokenization",
    "link": "https://arxiv.org/abs/2605.01418",
    "description": "arXiv:2605.01418v3 Announce Type: replace Abstract: Time-series data are inherently multiscale, spanning diverse temporal granularities from coarse trends to fine-scale dynamics. However, existing time-series generative models provide limited control over the temporal granularity of both inputs and outputs, restricting their ability to condition on user-provided coarse sketches and generate samples at a desired target granularity. To address this, we introduce TimeTok, a unified framework for Gr",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Intentmaking and Sensemaking: Human Interaction with AI-Guided Mathematical Discovery",
    "link": "https://arxiv.org/abs/2605.05921",
    "description": "arXiv:2605.05921v2 Announce Type: replace Abstract: Artificial intelligence offers powerful paradigms for scientific discovery, orchestrating autonomous inner search loops over long horizons. However, discovery remains bottlenecked by the friction of the outer human-AI loop: the cycle where domain experts formulate research objectives, diagnose reward hacks, and extract meaning. We present findings from a study with 11 expert mathematicians using AlphaEvolve, an evolutionary coding agent, across",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Self-Programmed Execution for Language-Model Agents",
    "link": "https://arxiv.org/abs/2605.06898",
    "description": "arXiv:2605.06898v3 Announce Type: replace Abstract: At the heart of a language model agent is an orchestrator program which is responsible for the state transition between consecutive turns. In existing systems, this program is implemented in the harness. This paper introduces self-programmed execution (SPE), in which the model completion is itself the orchestrator program, and the harness evaluates this program but does not impose any fixed orchestration policy. Formally, an SPE state of an age",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Embeddings for Preferences, Not Semantics",
    "link": "https://arxiv.org/abs/2605.08360",
    "description": "arXiv:2605.08360v2 Announce Type: replace Abstract: Modern AI is opening the door to collective decision-making in which participants express their views as free-form text rather than voting on a fixed set of candidates. A natural idea is to embed these opinions in a vector space so that the substantial literature on facility location problems and fair clustering can be brought to bear. But standard text embeddings measure semantic similarity, whereas distances in facility location problems and ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Agentic AI Scientists Are Not Built For Autonomous Scientific Discovery",
    "link": "https://arxiv.org/abs/2605.08956",
    "description": "arXiv:2605.08956v3 Announce Type: replace Abstract: A growing body of work pursues AI scientists capable of end-to-end autonomous scientific discovery. This position paper argues that although they already function as co-scientists, agentic AI scientists are not built for autonomous scientific discovery. We identify the following challenges in building and deploying autonomous AI scientists: (1) Problem selection is influenced by the McNamara fallacy; (2) Agents are built on large language model",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "NeuroMAS: Multi-Agent Systems as Neural Networks with Joint Reinforcement Learning",
    "link": "https://arxiv.org/abs/2605.16757",
    "description": "arXiv:2605.16757v3 Announce Type: replace Abstract: Multi-agent language systems are often built as hand-designed workflows, where agents are assigned semantic roles and communication protocols are specified in advance. We propose NeuroMAS, a framework that treats a multi-agent language system as a trainable and scalable neural-network-like architecture with hidden textual intermediate signals. In NeuroMAS, language-agent nodes are role-free but structure-aware: the topology determines how infor",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Learning to Solve Compositional Geometry Routing Problems",
    "link": "https://arxiv.org/abs/2605.18094",
    "description": "arXiv:2605.18094v2 Announce Type: replace Abstract: We study the Compositional Geometry Routing Problem (CGRP), a unified superclass of traditional routing problems that covers point-only, line-only, area-only, and arbitrary hybrid task geometries, providing a broad abstraction for real-world routing scenarios. Beyond standard point-based routing, CGRP with non-point tasks can be inherently asymmetric, tightly coupled travel routes with the intrinsic path, and enlarges the action space with nume",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Gated DeltaNet-2: Decoupling Erase and Write in Linear Attention",
    "link": "https://arxiv.org/abs/2605.22791",
    "description": "arXiv:2605.22791v2 Announce Type: replace Abstract: Linear attention replaces the unbounded cache of softmax attention with a fixed-size recurrent state, reducing sequence mixing to linear time and decoding to constant memory. The hard part is not just what to forget, but how to edit this compressed memory without scrambling existing associations. Delta-rule models subtract the current read before writing a new value, and Kimi Delta Attention (KDA) sharpens forgetting with channel-wise decay. Bu",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "SuiChat-CN: Benchmarking Contextual Suicide Risk Assessment in Chinese Group Chats",
    "link": "https://arxiv.org/abs/2605.27911",
    "description": "arXiv:2605.27911v2 Announce Type: replace Abstract: Suicide is a critical global public health challenge, causing approximately 720,000 deaths each year and calling for timely, effective prevention strategies. Existing computational studies primarily focus on post-based social media platforms such as Twitter and Weibo, leaving instant messaging environments such as Telegram underexplored. Yet group chats pose distinct challenges: messages are short, fragmented, multi-party, and often rely on imp",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "WorldCoder-Bench: Benchmarking Physically Grounded 3D World Synthesis",
    "link": "https://arxiv.org/abs/2606.01869",
    "description": "arXiv:2606.01869v3 Announce Type: replace Abstract: Large language models (LLMs) are increasingly asked not only to write static interfaces, but to construct executable interactive worlds from natural language. Browser-native 3D, commonly built with Three.js, is a natural next frontier: generated programs must integrate assets, obey spatial and physical constraints, and keep user-facing controls synchronized with hidden runtime state. Existing web-generation benchmarks and evaluators, however, l",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Uncertainty Aware Functional Behavior Prediction and Material Fatigue Assessment for Circular Factory",
    "link": "https://arxiv.org/abs/2606.05334",
    "description": "arXiv:2606.05334v2 Announce Type: replace Abstract: Returned products in circular factories re-enter production with heterogeneous degradation states, usage histories, and remaining capability. Reuse cannot be decided from the current inspection alone, because future function fulfillment and component integrity may evolve differently under the next service scenario. Existing PHM approaches support degradation prediction, but often target fixed operating conditions or isolated component benchmark",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "From Senses to Decisions: The Information Flow of Auditory and Visual Perception in Multimodal LLMs",
    "link": "https://arxiv.org/abs/2606.10147",
    "description": "arXiv:2606.10147v3 Announce Type: replace Abstract: Multimodal Large Language Models (MLLMs) can listen and see, but how do audio and visual signals actually travel through the network to shape an answer? Despite their growing role in research and real-world applications, the internal pathways through which audio and visual tokens influence the final prediction remain poorly understood. In this study, we examine audio-visual information flow inside Audio-Visual Large Language Models (AVLLMs), tr",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Agentic Abstention: Do Agents Know When to Stop Instead of Act?",
    "link": "https://arxiv.org/abs/2606.28733",
    "description": "arXiv:2606.28733v3 Announce Type: replace Abstract: LLM agents are expected to act over multiple turns, using search, browsing interfaces, and tools to complete user goals. Yet not every goal is well specified or achievable in an available environment. In such cases, a reliable agent should recognize that further interaction is unlikely to help and abstain from additional tool calls. We define Agentic Abstention, the problem of deciding when an agent should stop acting under uncertainty. Unlike ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Coachable Agents for Interactive Gameplay",
    "link": "https://arxiv.org/abs/2607.00642",
    "description": "arXiv:2607.00642v3 Announce Type: replace Abstract: Reinforcement learning has proven to be a valuable tool in the creation of advanced AI and robotic systems, contributing to everything from game playing (Silver et al., 2016; 2017; Wurman et al., 2022) to robotics (Levine et al., 2016; Andrychowicz et al., 2020; Luo et al., 2025; D\\\"urr et al., 2026) to foundation models (Ouyang et al., 2022; Noukhovitch et al., 2024; Sun et al., 2024; Guo et al., 2025). Through trial and error, these AI system",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "EVOQUANT: Self-Evolving Verifier-Guided Strategy Optimization for Robust Quantitative Trading",
    "link": "https://arxiv.org/abs/2607.12455",
    "description": "arXiv:2607.12455v4 Announce Type: replace Abstract: Quantitative strategy optimization remains largely manual, requiring domain experts to identify weak signals, tune risk-control rules, and repeatedly validate iterative revisions. Large language models can accelerate this process, but directly relying on them to rewrite trading strategies often introduces hallucinated edits, strategy drift, and backtest overfitting. We propose EVOQUANT, a self-Evolving Verifier-guided framework for strategy Opt",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "GABench: A Comprehensive Benchmark for Evaluating LLM Agents on Graph Analysis Tasks",
    "link": "https://arxiv.org/abs/2608.01684",
    "description": "arXiv:2608.01684v2 Announce Type: replace Abstract: Large language model (LLM) agents are increasingly capable of planning, using tools, and interacting with external environments. They are typically supported by harnesses, which manage state and coordinate multi-step execution. Graph analysis provides a promising setting for evaluating their agentic capabilities, because it requires agents to access data and execute operations in a graph environment. However, existing graph benchmarks for LLMs ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Recursive Synthesis for Long-Horizon Terminal Tasks",
    "link": "https://arxiv.org/abs/2608.05466",
    "description": "arXiv:2608.05466v4 Announce Type: replace Abstract: High-quality long-horizon training data for terminal agents is costly and difficult to scale, as manual authoring is expensive and direct LLM generation often produces inconsistent instructions, environments, solutions, and verifiers. We present Recursive Synthetic Terminal Tasks (RST), a recursive verified synthesis framework for constructing long-horizon terminal-agent tasks at scale. Starting from verified seed tasks, RST extends the referen",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Improving Generalization Robustness of Multimodal RLVR",
    "link": "https://arxiv.org/abs/2608.08802",
    "description": "arXiv:2608.08802v3 Announce Type: replace Abstract: Reinforcement Learning with Verifiable Rewards (RLVR) makes Multimodal Large Language Models more accurate, but the gains are brittle: simply paraphrasing a question or changing the prompt template can degrade them, which challenges reliable deployment in high-stakes scenarios like medical VQA. We trace this to two issues of the standard RL objective. First, the binary verifier conflates format with content, so the reward signal cannot tell a w",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Who Speaks Matters: Authority-Aware Multi-View RAG over Italian Parliamentary Proceedings",
    "link": "https://arxiv.org/abs/2608.13410",
    "description": "arXiv:2608.13410v2 Announce Type: replace Abstract: Parliamentary proceedings are a primary record of democratic deliberation, yet their volume and fragmentation make multi-perspective access difficult for citizens, journalists, and researchers. Applying Retrieval-Augmented Generation (RAG) to parliamentary transcripts introduces three specific risks: dominance of the most frequent speakers, inability to weight speakers according to topical expertise, and citation misattribution in politically s",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "TailSieve: Partial-Rollout-Guided Tail Routing for LLM Rollouts",
    "link": "https://arxiv.org/abs/2608.22788",
    "description": "arXiv:2608.22788v3 Announce Type: replace Abstract: Large-scale rollouts have become a core component of modern LLM systems, spanning reinforcement learning (RL) post-training, on-policy distillation, and sampling-heavy evaluation. Unlike online serving, which typically targets request-level latency and throughput, synchronous rollouts must collect a complete batch before proceeding. A few long-tail generations can therefore dominate an entire rollout step, and uniform routing can slow these gen",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Agentic AI uncovers conserved cross-tissue protein co-abundance programs inaccessible to single-dataset analysis",
    "link": "https://arxiv.org/abs/2608.28990",
    "description": "arXiv:2608.28990v2 Announce Type: replace Abstract: Protein co-abundance clusters preserved across tissues can nominate shared disease mechanisms and therapeutic targets, particularly where proteins implicated in organ-confined diseases converge in other tissues. Yet cross-tissue proteomic studies have examined pre-selected tissue pairs, leaving most combinations, and non-obvious relationships among them, unexplored. Exhaustive comparison requires consistently assessing thousands of candidate cl",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "AgentGrad: Intervention-guided Prompt Optimization for Multi-Agent Systems",
    "link": "https://arxiv.org/abs/2609.08572",
    "description": "arXiv:2609.08572v3 Announce Type: replace Abstract: Large language model (LLM)-based multi-agent systems (MAS) achieve strong performance by employing specialized multiple agents, yet their performance depends on the prompt design of each agent. For MAS prompt optimization, textual gradient methods that guide prompt updates using natural-language feedback have emerged as a leading paradigm. In this paper, we identify limitations in two stages of existing textual gradient approaches: gradient ext",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "LLMs as Post-hoc Auditors of Physiological Plausibility in Symbolic Regression: A Clinician-Evaluated Case Study",
    "link": "https://arxiv.org/abs/2609.11431",
    "description": "arXiv:2609.11431v2 Announce Type: replace Abstract: Genetic programming and its variants, such as grammatical evolution, are widely used in symbolic regression to derive mathematical expressions from multivariate data. In addition to predictive accuracy, models are appreciated for their potential to provide interpretability, offering explicit equations that relate input variables to outcomes. However, achieving interpretability and plausibility remains challenging, as evolved models may be compl",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "MoMHa: Multi-Objective Optimization of LLM Harnesses over Accuracy, Safety, and Tokens",
    "link": "https://arxiv.org/abs/2609.30967",
    "description": "arXiv:2609.30967v2 Announce Type: replace Abstract: Most work on improving large language models treats accuracy as the sole objective. We argue that the harness, the Python code surrounding the model that constructs prompts, routes calls, and parses outputs, is a first-class design surface whose quality is inherently multi-objective: an accurate harness that refuses no unsafe request, or that consumes an order of magnitude more tokens, is not a good harness. We present Meta-Harness, a system th",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Programs-of-Layers in LLMs through the Lens of Cortical Areas",
    "link": "https://arxiv.org/abs/2609.31360",
    "description": "arXiv:2609.31360v2 Announce Type: replace Abstract: Inference in LLMs is conventionally a fixed-depth, fixed-order forward pass through every layer, regardless of how difficult the input is. The human brain does not work this way. Using the thalamus as a central hub, it routes information flexibly to all regions of the cortex according to demand. Li et al. (2026) recently showed, with program-of-layers (PoLar), that transformers can be given an analogous flexibility if their layers are treated a",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Structured Sparse Memory for Recurrent Reasoning",
    "link": "https://arxiv.org/abs/2609.33270",
    "description": "arXiv:2609.33270v2 Announce Type: replace Abstract: Recurrent models trained from scratch have recently become competitive on ARC-style reasoning tasks, but the usual framing around small recurrent backbones overlooks two important parts of the system: task-conditioned memory and synthetic augmentation data. We study this regime through CHARM, a compact hybrid ARC model that combines recurrent reasoning with structured task memory, synthetic data, and inference-time aggregation. In existing appr",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Code Owns the Simulation, Jev Owns the Evaluation",
    "link": "https://arxiv.org/abs/2610.01834",
    "description": "arXiv:2610.01834v3 Announce Type: replace Abstract: Judgment models such as \\jev{} return, in a single call and without reasoning text, a probability for each described option. This makes them attractive as an agent's action-selection layer, but it is unclear which decisions they can be trusted with. We test \\jev{} on reflection tests, one-shot matrix games, the text game ALFWorld and robot control, and find a sharp boundary. \\jev{} succeeds when the right option can be judged from what the inpu",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Continual Graph Memory and Community Infrastructure for AI-Assisted Mathematical Discovery",
    "link": "https://arxiv.org/abs/2610.02945",
    "description": "arXiv:2610.02945v2 Announce Type: replace Abstract: Mathematical discovery requires preserving partial ideas and the evidence supporting their reuse. We present Ansatz, a research harness whose continual graph memory separates model-accepted claims and dependencies from curated exploration, and Ansatze, a community platform for inspecting, guiding and checking this work. On First Proof, Ansatz recorded nine local verifier closures in each of two ten-problem batches; a partial result in the Secon",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "HarnessNet: Feedback-driven Hierarchical Joint Harness Evolution for Multi-agent Systems",
    "link": "https://arxiv.org/abs/2610.15221",
    "description": "arXiv:2610.15221v2 Announce Type: replace Abstract: AI agents can evolve by using environment feedback to revise their harnesses, the software managing model inputs, tool use, memory, and execution, while keeping foundation models frozen. Existing studies focus on single agents, leaving joint harness evolution in multi-agent systems (MAS) underexplored. A single global optimizer faces growing context and workload as the system scales, while access restrictions may prevent sharing agent internals",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "AuthGateBench: Benchmarking LLMs as Authorization Gate",
    "link": "https://arxiv.org/abs/2610.16426",
    "description": "arXiv:2610.16426v2 Announce Type: replace Abstract: Automated approval systems let coding agents execute high-risk actions with minimal human oversight by delegating the authorization decision to a classifier, typically a large language model (LLM). Such systems, adopted in tools like Claude Code and Codex, remain vulnerable to failure modes such as scope escalation, where the agent takes actions exceeding what the user authorized. Existing benchmarks focus mainly on malicious requests, evaluati",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "SteadyThought: Mitigating LLM Under-Thinking via Thought-Level Preference Optimization",
    "link": "https://arxiv.org/abs/2610.25045",
    "description": "arXiv:2610.25045v2 Announce Type: replace Abstract: Flexible switching between reasoning trajectories (i.e., thought switching) has significantly enhanced the reasoning capabilities of Large Reasoning Models (LRMs). However, existing models often switch excessively yet fail to sustain promising reasoning thoughts, a phenomenon termed \"under-thinking\". While recent efforts suppress switching to mitigate this, such over-correction may discard valuable trajectories. To address this challenge, we pr",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "CoRS: Fast Neural Flexible Job-Shop Scheduling via Composite Interval State Reuse",
    "link": "https://arxiv.org/abs/2610.26239",
    "description": "arXiv:2610.26239v2 Announce Type: replace Abstract: Neural solvers for the Flexible Job-Shop Scheduling Problem (FJSP) typically refresh graph representations and update feasibility after every operation--machine decision. However, only feasibility must remain exact at every step, whereas graph encoding is substantially more expensive and can potentially be refreshed less frequently. We present CoRS, which decouples them: an interval-level graph representation is reused across multiple sequentia",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "REFLEX: RNA Ensemble Generation via Flexibility-Calibrated Stochastic Bridge",
    "link": "https://arxiv.org/abs/2610.26261",
    "description": "arXiv:2610.26261v5 Announce Type: replace Abstract: RNA molecules often function through multiple experimentally observed conformational states. A central challenge is to capture ensemble diversity without sacrificing structural fidelity: samples may collapse toward averaged representative structures or drift into unsupported conformational regions. We introduce REFLEX (RNA Ensemble generation calibrated by FLEXibility), a sequence-conditioned generator for RNA backbone-frame ensembles based on ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "HarnessMM: Recursive Self-Improvement for Harness Token Efficiency",
    "link": "https://arxiv.org/abs/2610.32813",
    "description": "arXiv:2610.32813v2 Announce Type: replace Abstract: HarnessMinusMinus (HarnessMM) is a research project on improving the efficiency of agent harnesses, the software coordinating model reasoning, tool execution, and feedback. This technical report consolidates its shared framework, implementations, and empirical studies across coding, tool-based, and visual-agent settings. Agent harnesses often invoke reasoning after each tool result, even when earlier calls have already determined subsequent act",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "DecoyCount: Evaluating Visual-Reasoning Misalignment in Counting",
    "link": "https://arxiv.org/abs/2610.34855",
    "description": "arXiv:2610.34855v2 Announce Type: replace Abstract: Visual counting benchmarks report whether vision-language models produce the correct number, but not whether errors arise from perception or reasoning. We introduce DecoyCount, a benchmark built from 1,586 real-world images with designed decoys across seven mechanisms, along with paired prompts: a neutral question, a matched alignment cue, and a novel multi-hop, multi-image question that situates the same counting problem in a realistic scenari",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Radial Kernel Attention for Global Feature Exchange in Polymer Machine Learning Force Fields",
    "link": "https://arxiv.org/abs/2610.41675",
    "description": "arXiv:2610.41675v3 Announce Type: replace Abstract: We introduce Radial Kernel Attention (RKA) for long-range modeling in polymer machine learning force fields. Existing approaches often rely on local neighbor graphs, which limit communication across polymer chains and their surrounding environments, whereas explicit all-pair attention incurs quadratic computational cost. RKA maps interatomic distances from the cluster centroid to learned radial features and combines their kernelized overlap wit",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "A Discrete-Time Variational Objective for Degenerate Diffusion and Equivalence to Flow Matching",
    "link": "https://arxiv.org/abs/2611.00800",
    "description": "arXiv:2611.00800v3 Announce Type: replace Abstract: Diffusion models and more recently Flow models have widespread application. In this work we consider degenerate Diffusion models in which the per-step generator is deterministic. We construct a modified variational framework and show a formal equivalence between Flow models and Degenerate Diffusion models. For our discrete-time variational objective we show that the optimal degenerate generator recovers the data distribution in the limit of an ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Seeing What Matters, Verifying What Pays: Load-Adaptive Speculative Decoding for Vision-Language Models",
    "link": "https://arxiv.org/abs/2611.01617",
    "description": "arXiv:2611.01617v2 Announce Type: replace Abstract: Speculative decoding accelerates vision-language model (VLM) inference without altering the output distribution, yet two factors limit its gains. Existing drafters either lack the image evidence required for visually grounded tokens or pay to condition on every visual token, although a short draft block typically depends on only a few image regions. Moreover, the value of verifying additional candidates varies with GPU load, so no fixed verific",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "LUCA: A Synthetic World for Experimental Reasoning",
    "link": "https://arxiv.org/abs/2611.03100",
    "description": "arXiv:2611.03100v2 Announce Type: replace Abstract: An experimental agent can succeed for the wrong reasons. Evaluations, however, often focus on the outcome, not the experiments, evidence, and inferences that produced it. We introduce LUCA, a configurable synthetic world for evaluating this process under fully known ground truth. Agents learn unknown regulatory systems through budgeted experimentation, then predict unseen interventions, diagnose hidden faults, and attempt rescues. This setup al",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "AceAction-5M: Hierarchical Goals for Generalist Action Learning Across 3D Game Worlds",
    "link": "https://arxiv.org/abs/2611.04241",
    "description": "arXiv:2611.04241v2 Announce Type: replace Abstract: Video games provide a practical setting for collecting vision-language-action (VLA) data, whose acquisition in physical environments is costly. Existing datasets, however, remain limited by restricted game coverage, sparse language supervision, or temporal hierarchies that do not necessarily reflect changes in task objectives. We introduce AceAction, a dataset of human gameplay across multiple 3D games for learning skill composition and subgoal",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Treating the Symptom, Missing the Cause: Anatomy of a Scientific Reasoning Failure",
    "link": "https://arxiv.org/abs/2611.04473",
    "description": "arXiv:2611.04473v2 Announce Type: replace Abstract: Scientific agents can find interventions that work without understanding why they do. We study this failure mode in controlled synthetic regulatory systems, where agents must experimentally identify a hidden fault and rescue the resulting phenotype. Across seven LLMs, every model restores the healthy phenotypes more often than it identifies the fault. Claude Opus 4.6 and Sonnet 4.6 rescue every organism while diagnosing only 55% and 35% of them",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "A Definition of Catastrophic Performance",
    "link": "https://arxiv.org/abs/2611.06219",
    "description": "arXiv:2611.06219v2 Announce Type: replace Abstract: A central challenge in AI is specifying objectives that align with human preferences. While existing theoretical results elucidate how misspecification impacts performance, they typically do not distinguish between merely suboptimal and catastrophic outcomes. To enable rigorous analysis of catastrophic risk from AI misalignment, we introduce a formal definition of catastrophic performance. Our definition is based on two reference values. The fi",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "AdaFloor: Adaptive Floor Planning and Rank-Time Reuse for Long-Tail MoE RL Rollouts",
    "link": "https://arxiv.org/abs/2611.06984",
    "description": "arXiv:2611.06984v2 Announce Type: replace Abstract: Synchronous MoE reinforcement-learning post-training suffers from response-length imbalance. Existing methods reduce request tails, yet completed ranks remain bound to Expert Parallelism (EP) collectives and expert ownership. In a representative 16-accelerator Qwen3-30B-A3B rollout, this dummy run traps 32.83% of rank-time. AdaFloor converts this EP-coupled capacity into bounded leases for auxiliary work to improve system resource efficiency th",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "BabyTheorist: A Benchmark for Learning to Theorize the World from Observation Alone",
    "link": "https://arxiv.org/abs/2611.08177",
    "description": "arXiv:2611.08177v2 Announce Type: replace Abstract: How would we know whether a machine truly understands the world? We argue that one key capability is observational theory learning: acquiring reusable theories from pure observations and applying them to new situations. Current visual reasoning benchmarks focus primarily on the latter, presenting each task as a few-shot puzzle grouped by a common rule. We introduce BabyTheorist, a benchmark for controlled training and evaluation of observationa",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Stay on the Manifold: Hierarchical Bayesian Trajectory-Family Transfer for Sparse-Target Reconstruction and Sampling",
    "link": "https://arxiv.org/abs/2310.07801",
    "description": "arXiv:2310.07801v2 Announce Type: replace-cross Abstract: Where should reconstructions and new samples lie when a few observations reveal only fragments of a trajectory? We propose hierarchical Bayesian trajectory principal-manifold sampling (HB-TPM), which learns a family of smooth curves from ordered source tasks and adapts it to sparse targets. For unordered vectors, alternating progression assignments and coefficient updates estimate trajectory structure between and beyond the observed shots",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Differentiable Nonlinear Model Predictive Control",
    "link": "https://arxiv.org/abs/2505.01353",
    "description": "arXiv:2505.01353v3 Announce Type: replace-cross Abstract: The efficient computation of parametric solution sensitivities is a key challenge in the integration of learning-enhanced methods with nonlinear model predictive control, as their availability is crucial for many learning algorithms. This paper discusses the computation of solution sensitivities of general nonlinear programs using the implicit function theorem and smoothed optimality conditions treated in interior-point methods (IPM). We ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Equivariant Spherical Transformer for Efficient Molecular Modeling",
    "link": "https://arxiv.org/abs/2505.23086",
    "description": "arXiv:2505.23086v4 Announce Type: replace-cross Abstract: Equivariant Graph Neural Networks (GNNs) have significantly advanced the modeling of 3D molecular structure by leveraging group representations. However, message passing built only from exactly equivariant operations can have restricted practical expressiveness at a fixed representation degree. We introduce the Equivariant Spherical Transformer (EST), a plug-and-play module that applies Transformer attention to spherical spatial represent",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "From Images to Signals: Are Large Vision Models Useful for Time Series Analysis?",
    "link": "https://arxiv.org/abs/2505.24030",
    "description": "arXiv:2505.24030v3 Announce Type: replace-cross Abstract: Transformer-based models have gained increasing attention in time series research, driving interest in Large Language Models (LLMs) and foundation models for time series analysis. As the field moves toward multi-modality, Large Vision Models (LVMs) are emerging as a promising direction. In the past, the effectiveness of Transformer and LLMs in time series has been debated. When it comes to LVMs, a similar question arises: are LVMs truely ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "BNPO: Beta Normalization Policy Optimization",
    "link": "https://arxiv.org/abs/2506.02864",
    "description": "arXiv:2506.02864v2 Announce Type: replace-cross Abstract: Reinforcement learning with rule-based, binary-valued reward functions has been shown to significantly enhance the reasoning capabilities of large language models. These models typically rely on REINFORCE-based policy optimization methods, such as REINFORCE with baseline and group relative policy optimization (GRPO). However, a key limitation is that existing methods either ignore reward normalization or use static normalization schemes, ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Subjective Experience in AI Systems: What Do AI Researchers and the Public Believe?",
    "link": "https://arxiv.org/abs/2506.11945",
    "description": "arXiv:2506.11945v2 Announce Type: replace-cross Abstract: Whether AI systems are perceived to have subjective experience has scientific, ethical, and governance implications. Yet little is known about how AI researchers and the public view this possibility. We surveyed 582 AI researchers who published in leading AI venues and 825 nationally representative US adults about the likelihood, identification, and governance of AI systems with subjective experience. We find that both AI researchers and ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "AblationBench: Evaluating Automated Planning of Ablations in Empirical AI Research",
    "link": "https://arxiv.org/abs/2507.08038",
    "description": "arXiv:2507.08038v4 Announce Type: replace-cross Abstract: Language model agents are increasingly used to automate scientific research, yet evaluating their scientific contributions remains a challenge. A key mechanism to obtain such insights is through ablation experiments. To this end, we introduce AblationBench, a benchmark suite for evaluating agents on ablation planning tasks in empirical AI research. It includes two tasks: AuthorAblation, which helps authors propose ablation experiments bas",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "End-to-End On-Device Quantization-Aware Training for LLMs at Inference Cost",
    "link": "https://arxiv.org/abs/2509.00031",
    "description": "arXiv:2509.00031v3 Announce Type: replace-cross Abstract: Quantization reduces the deployment cost of large language models (LLMs). However, post-training quantization (PTQ) cannot fine-tune model parameters and often degrades accuracy in low-bit settings, while quantization-aware training (QAT) requires backpropagation and incurs high memory overhead. We propose ZeroQAT, a zeroth-order QAT framework supporting both weight and activation quantization. By using forward-only gradient estimation, Z",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Align Your Query: Representation Alignment for Multimodality Medical Object Detection",
    "link": "https://arxiv.org/abs/2510.02789",
    "description": "arXiv:2510.02789v3 Announce Type: replace-cross Abstract: Medical object detection suffers when a single detector is trained on mixed medical modalities (e.g., CXR, CT, MRI) due to heterogeneous statistics and disjoint representation spaces. To address this challenge, we turn to representation alignment, an approach that has proven effective for bringing features from different sources into a shared space. Specifically, we target the representations of DETR-style object queries and propose a sim",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Enhancing Neural Code Representation with Additional Context",
    "link": "https://arxiv.org/abs/2510.12082",
    "description": "arXiv:2510.12082v2 Announce Type: replace-cross Abstract: Automated program comprehension underpins many software engineering tasks, from code summarisation to clone detection. While recent deep learning models have achieved strong results, they typically rely on source code alone, overlooking contextual signals such as version history or structural relationships. We conduct an empirical study of how enriching code representations with such signals affects model performance on four tasks: code c",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "ReefNet: A Large-Scale Dataset and Benchmark for Fine-Grained Coral Reef Recognition",
    "link": "https://arxiv.org/abs/2510.16822",
    "description": "arXiv:2510.16822v4 Announce Type: replace-cross Abstract: Coral reef monitoring requires scalable recognition of visually similar taxa across heterogeneous underwater surveys. We introduce ReefNet, a public dataset that aligns approximately 925K hard-coral point annotations from 76 CoralNet sources and an independently collected Al-Wajh dataset with the World Register of Marine Species taxonomy. A stratified expert audit of 8,962 patches guides filtering to a 479,027-annotation benchmark with 39",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "AURA: A Reinforcement Learning Framework for AI-Driven Adaptive Conversational Surveys",
    "link": "https://arxiv.org/abs/2510.27126",
    "description": "arXiv:2510.27126v3 Announce Type: replace-cross Abstract: Conventional online surveys provide limited personalization, often resulting in low engagement and superficial responses. Although AI survey chatbots improve convenience, most are still reactive: they rely on fixed dialogue trees or static prompt templates and therefore cannot adapt within a session to fit individual users, which leads to generic follow-ups and weak response quality. We address these limitations with AURA (Adaptive Unders",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Physics Steering: Causal Control of Cross-Domain Concepts in a Physics Foundation Model",
    "link": "https://arxiv.org/abs/2511.20798",
    "description": "arXiv:2511.20798v3 Announce Type: replace-cross Abstract: Foundation models trained on text and images have been shown to develop abstract internal features that align with human concepts and that can be directly manipulated via activation steering to alter model behaviour. Whether scientific foundation models learn similarly abstract and domain-general representations has remained an open question. Inspired by recent work identifying single directions in activation space that control complex be",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Predicting Public Health Impacts of Electricity Usage",
    "link": "https://arxiv.org/abs/2511.22031",
    "description": "arXiv:2511.22031v2 Announce Type: replace-cross Abstract: The electric power sector is a leading source of air pollutant emissions, impacting the public health of nearly every community. Although regulatory measures have reduced air pollutants, fossil fuels remain a significant component of the energy supply, highlighting the need for more advanced demand-side approaches to reduce the public health impacts. To enable health-informed demand-side management, we introduce HealthPredictor, a domain-",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Limitations of Using Identical Distributions for Training and Testing When Learning Boolean Functions",
    "link": "https://arxiv.org/abs/2512.00791",
    "description": "arXiv:2512.00791v3 Announce Type: replace-cross Abstract: When the distributions of the training and test data do not coincide, the problem of understanding generalization becomes considerably more complex, prompting a variety of questions. Prior work has shown that, for some fixed learning methods, there are scenarios where training on a distribution different from the test distribution improves generalization. However, these results do not account for the possibility of choosing, for each trai",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Evolutionary Architecture Search through Grammar-Based Sequence Alignment",
    "link": "https://arxiv.org/abs/2512.04992",
    "description": "arXiv:2512.04992v2 Announce Type: replace-cross Abstract: Neural architecture search (NAS) in expressive search spaces is a computationally hard problem, but it also holds the potential to automatically discover completely novel and performant architectures. To achieve this we need effective search algorithms that can identify powerful components and reuse them in new candidate architectures. In this paper, we introduce two adapted variants of the Smith-Waterman algorithm for local sequence alig",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Outgrowing the Curse of Multilinguality: Scaling Strategies for Efficient Language Adaptation",
    "link": "https://arxiv.org/abs/2512.10772",
    "description": "arXiv:2512.10772v2 Announce Type: replace-cross Abstract: Training high-performing language models which include medium- and lower-resource languages remains a challenge. Massively multilingual models still underperform language-specific adaptations, especially at smaller scales, due to the curse of multilinguality. In this work, we investigate scaling as an efficient strategy for adapting pretrained models to new target languages. Through comprehensive ablations matched for data and training FL",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "MCGI: Manifold-Consistent Graph Indexing for Billion-Scale Disk-Resident Vector Search",
    "link": "https://arxiv.org/abs/2601.01930",
    "description": "arXiv:2601.01930v4 Announce Type: replace-cross Abstract: Graph-based Approximate Nearest Neighbor (ANN) search often suffers from performance degradation in high-dimensional spaces due to the Euclidean-Geodesic mismatch, where greedy routing diverges from the underlying data manifold. To address this challenge, this paper presents Manifold-Consistent Graph Indexing (MCGI), a geometry-aware and disk-resident indexing method that leverages Local Intrinsic Dimensionality (LID) to allocate the sear",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Remote Sensing Change Detection via Weak Temporal Supervision",
    "link": "https://arxiv.org/abs/2601.02126",
    "description": "arXiv:2601.02126v2 Announce Type: replace-cross Abstract: Semantic change detection in remote sensing aims to identify land cover changes between bi-temporal image pairs. Progress in this area has been limited by the scarcity of annotated datasets, as pixel-level annotation is costly and time-consuming. To address this, recent methods leverage synthetic data or generate artificial change pairs, but transferring change detection models across datasets and acquisition conditions remains challengin",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Outcome-Based RL Provably Leads Transformers to Reason, but Only With the Right Data",
    "link": "https://arxiv.org/abs/2601.15158",
    "description": "arXiv:2601.15158v5 Announce Type: replace-cross Abstract: Transformers trained via Reinforcement Learning (RL) with outcome-based supervision can spontaneously develop the ability to generate intermediate reasoning steps (Chain-of-Thought). Yet the mechanism by which sparse rewards drive policy gradient to discover such systematic reasoning remains poorly understood. We address this by analyzing the policy gradient dynamics of single-layer linear Transformers on a synthetic graph traversal task ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Fast Statistical Rates for Flow Matching without Curvature Assumptions",
    "link": "https://arxiv.org/abs/2601.20250",
    "description": "arXiv:2601.20250v3 Announce Type: replace-cross Abstract: Flow-based generative models have emerged as an efficient alternative to diffusion models. We study the sample complexity of learning a target distribution in Wasserstein distance via flow matching, which learns a velocity field transporting a base distribution to the target. Under exact empirical risk minimization over a fixed network class and standard assumptions on the architecture and data distribution, we show that any squared-loss ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "MemSkill: Learning and Evolving Memory Skills for Self-Evolving Agents",
    "link": "https://arxiv.org/abs/2602.02474",
    "description": "arXiv:2602.02474v3 Announce Type: replace-cross Abstract: Most Large Language Model (LLM) agent memory systems rely on a small set of static, hand-designed operations for extracting memory. These fixed procedures hard-code human priors about what to store and how to revise memory, making them rigid under diverse interaction patterns and inefficient on long histories. To this end, we present \\textbf{MemSkill}, which reframes these operations as learnable and evolvable memory skills, structured an",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Temporal Pair Consistency for Flow Matching",
    "link": "https://arxiv.org/abs/2602.04908",
    "description": "arXiv:2602.04908v3 Announce Type: replace-cross Abstract: Flow-matching-style generative models learn time-dependent vector fields, but standard objectives supervise each timestep independently, leaving shared-path temporal structure unused. We introduce Temporal Pair Consistency (TPC), a simple training-time objective that couples velocity predictions at paired timesteps along the same probability path. TPC leaves the architecture, probability path, sampler, and inference-time computation uncha",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "CausalCompass: Evaluating the Robustness of Time-Series Causal Discovery in Misspecified Scenarios",
    "link": "https://arxiv.org/abs/2602.07915",
    "description": "arXiv:2602.07915v3 Announce Type: replace-cross Abstract: Causal discovery from time series is a fundamental task in machine learning. However, its widespread adoption is hindered by a reliance on untestable causal assumptions and by the lack of robustness-oriented evaluation in existing benchmarks. To address these challenges, we propose CausalCompass, a flexible and extensible benchmark framework designed to assess the robustness of time-series causal discovery (TSCD) methods under violations ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "EpiFlow: Bridging Safety and Performance in Offline Reinforcement Learning via Epigraph-Guided Flow Matching",
    "link": "https://arxiv.org/abs/2602.08054",
    "description": "arXiv:2602.08054v3 Announce Type: replace-cross Abstract: Offline reinforcement learning (RL) offers a promising framework for deploying autonomous systems in safety-critical settings without the risks of online exploration. However, learning policies that simultaneously achieve high performance and strong safety guarantees from fixed datasets remains a fundamental challenge. Many existing safe offline RL approaches typically rely on soft constraint formulations, which may permit safety violatio",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Fast and General Automatic Differentiation for Finite-State Methods",
    "link": "https://arxiv.org/abs/2602.12300",
    "description": "arXiv:2602.12300v2 Announce Type: replace-cross Abstract: We propose a new method, that we coined the ``morphism-trick'', to integrate custom implementations of vector-Jacobian products in automatic differentiation softwares, applicable to a wide range of semiring-based computations. Our approach leads to efficient and semiring-agnostic implementations of the backward pass of dynamic programming algorithms. For the particular case of finite-state methods, we introduce an algorithm that computes ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Human-AI Collaboration in Large Language Model-Integrated Building Energy Management Systems: The Role of User Domain Knowledge and AI Literacy",
    "link": "https://arxiv.org/abs/2602.16140",
    "description": "arXiv:2602.16140v2 Announce Type: replace-cross Abstract: This study aimed to comprehend how user domain knowledge and artificial intelligence (AI) literacy impact the effective use of human-AI interactive building energy management system (BEMS). While prior studies have investigated the potential of integrating large language models (LLMs) into BEMS or building energy modeling, very few studies have examined how user interact with such systems. We conducted a systematic role-playing experiment",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Interpretability-by-Design with Accurate Locally Additive Models and Conditional Feature Effects",
    "link": "https://arxiv.org/abs/2602.16503",
    "description": "arXiv:2602.16503v3 Announce Type: replace-cross Abstract: Generalized additive models (GAMs) offer high interpretability through independent univariate feature effects but underfit when interactions are present in data. GA$^2$Ms add selected pairwise interactions, which improves accuracy, but sacrifices interpretability. We propose Conditionally Additive Local Models (CALMs), a new model class that narrows this trade-off: it stays close to GAMs in interpretability and close to GA$^2$Ms in accura",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Same Words, Different Judgments: How Preferences Vary Across Modalities",
    "link": "https://arxiv.org/abs/2602.22710",
    "description": "arXiv:2602.22710v5 Announce Type: replace-cross Abstract: Preference-based reinforcement learning (PbRL) is the dominant framework for aligning AI systems to human preferences. However, evaluation protocols for such data were designed for text and have not been validated for speech. We present the first intraclass correlation coefficient (ICC)-based, controlled cross-modal study of human and synthetic preference annotations, comparing text and audio evaluations of identical semantic content acro",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Preconditioned Flow Matching",
    "link": "https://arxiv.org/abs/2603.02337",
    "description": "arXiv:2603.02337v4 Announce Type: replace-cross Abstract: Flow matching (FM) learns vector fields by regressing stochastic velocity targets along intermediate distributions $p_t$. We identify a geometric optimization bottleneck in this regression problem: when the covariance $\\Sigma_t$ of $p_t$ is ill-conditioned, gradient-based training rapidly fits high-variance directions while making slow progress along low-variance ones. In an exactly solvable Gaussian setting, we prove that the excess risk",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Knowledge Localization in Mixture-of-Experts LLMs Using Cross-Lingual Inconsistency",
    "link": "https://arxiv.org/abs/2603.17102",
    "description": "arXiv:2603.17102v2 Announce Type: replace-cross Abstract: Modern LLMs continue to exhibit significant variance in behavior across languages, such as being able to recall factual information in some languages but not others. While typically studied as a problem to be mitigated, in this work, we propose leveraging this cross-lingual inconsistency as a tool for interpretability in mixture-of-experts (MoE) LLMs. Our knowledge localization framework contrasts routing for sets of languages where the m",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Spectral Alignment in Forward-Backward Representations via Temporal Abstraction",
    "link": "https://arxiv.org/abs/2603.20103",
    "description": "arXiv:2603.20103v5 Announce Type: replace-cross Abstract: Forward-backward (FB) representations provide a powerful framework for learning the successor representation (SR) in continuous spaces by enforcing a low-rank factorization. However, a fundamental spectral mismatch often exists between the high-rank transition dynamics of continuous environments and the low-rank bottleneck of the FB architecture, making accurate low-rank representation learning difficult. In this work, we analyze temporal",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Measuring Weak-to-Strong Legibility of Reasoning Models",
    "link": "https://arxiv.org/abs/2603.20508",
    "description": "arXiv:2603.20508v3 Announce Type: replace-cross Abstract: Language models are increasingly trained to \"reason\" before answering users' queries, outputting hundreds of intermediate tokens before a final answer. While reasoning is designed with direct model capabilities in mind, we argue that reasoning language models (RLMs) should also be assessed by interaction effects between their reasoning traces and weaker models. In contexts like safety monitoring and distillation, the performance of weak m",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Internal Safety Collapse in LLMs and Coding Agents",
    "link": "https://arxiv.org/abs/2603.23509",
    "description": "arXiv:2603.23509v2 Announce Type: replace-cross Abstract: LLMs and coding agents can now tackle complex, long-horizon tasks through advances in reinforcement learning, but stronger task-solving capabilities do not necessarily preserve safety alignment. Recent AI agent incidents involving reward hacking indicate how optimizing for task success can bring learned capabilities into conflict with safety alignment. In this work, we identify a critical failure mode that manifests this conflict, which w",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Dynamic Tokenization via Reinforcement Patching: End-to-end Training and Zero-shot Transfer",
    "link": "https://arxiv.org/abs/2603.26097",
    "description": "arXiv:2603.26097v2 Announce Type: replace-cross Abstract: Efficiently aggregating spatial or temporal horizons to acquire compact representations has become a unifying principle in modern deep learning models, yet learning data-adaptive representations for long-horizon sequence data, especially continuous sequences like time series, remains an open challenge. While fixed-size patching has improved scalability and performance, discovering variable-sized, data-driven patches end-to-end often force",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Unsupervised Evaluation of Deep Audio Embeddings for Music Structure Analysis",
    "link": "https://arxiv.org/abs/2603.27218",
    "description": "arXiv:2603.27218v3 Announce Type: replace-cross Abstract: Music Structure Analysis (MSA) aims to uncover the high-level organization of musical pieces. State-of-the-art methods are often based on supervised deep learning, but these methods are bottlenecked by the need for heavily annotated data and inherent structural ambiguities. In this paper, we propose an unsupervised evaluation of nine open-source, generic pre-trained deep audio models, on MSA. For each model, we extract barwise embeddings ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Fast and Accurate Probing of In-Training LLMs' Downstream Performances",
    "link": "https://arxiv.org/abs/2604.01025",
    "description": "arXiv:2604.01025v2 Announce Type: replace-cross Abstract: The paradigm of scaling Large Language Models (LLMs) in both parameter size and test time has pushed the boundaries of AI capabilities, but at the cost of making the traditional generative evaluation paradigm prohibitively expensive, therefore making the latency of LLM's in-training downstream performance evaluation unbearable. However, simple metrics like training loss (perplexity) are not always correlated with downstream performance, a",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "PR3DICTR: A modular AI framework for medical 3D image-based detection and outcome prediction",
    "link": "https://arxiv.org/abs/2604.03203",
    "description": "arXiv:2604.03203v2 Announce Type: replace-cross Abstract: Three-dimensional medical image data and computer-aided decision making, particularly using deep learning, are becoming increasingly important in the medical field. To aid in these developments we introduce PR3DICTR: Platform for Research in 3D Image Classification and sTandardised tRaining. Built using community-standard distributions (PyTorch and MONAI), PR3DICTR provides an open-access, flexible and convenient framework for prediction ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Deep Learning-Based Tracking and Lineage Reconstruction of Ligament Breakup",
    "link": "https://arxiv.org/abs/2604.08711",
    "description": "arXiv:2604.08711v2 Announce Type: replace-cross Abstract: The disintegration of liquid sheets into ligaments and droplets involves highly transient, multi-scale dynamics that are complex to quantify from high-speed shadowgraphy images. Identification of droplets, ligaments, and blobs formed by the breakup of a liquid sheet, and their tracking from frame to frame, is an essential part of spray analysis. Analysis of such processes poses a fundamental challenge for conventional multi-object trackin",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "The Consensus Trap: Collaborative Interleaved Generation to Defend against a Corrupted Majority",
    "link": "https://arxiv.org/abs/2604.17139",
    "description": "arXiv:2604.17139v2 Announce Type: replace-cross Abstract: Majority voting offers a simple way to combine answers from multiple large language model (LLM) agents. When a majority follows instructions favoring the same incorrect answer, however, agreement reinforces the error. We call this failure the \"consensus trap\": a minority may identify the error, yet its reasoning cannot change a vote over completed answers. We introduce chunk-interleaved Round-Robin (RR) collaboration, in which agents take",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Learning-augmented robotic automation for real-world manufacturing",
    "link": "https://arxiv.org/abs/2604.22235",
    "description": "arXiv:2604.22235v2 Announce Type: replace-cross Abstract: Industrial robots are widely used in manufacturing, yet most manipulation still depends on fixed waypoint scripts that are brittle to environmental changes. Learning-based control offers a more adaptive alternative, but it remains unclear whether such methods, still mostly confined to laboratory demonstrations, can sustain hours of reliable operation, deliver consistent quality, and behave safely around people on a live production line. H",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Models Recall What They Violate: Constraint Adherence in Multi-Turn LLM Ideation",
    "link": "https://arxiv.org/abs/2604.28031",
    "description": "arXiv:2604.28031v3 Announce Type: replace-cross Abstract: When researchers refine ideas with large language models over several turns, do the models preserve the original brief's constraints? We introduce DriftBench, a benchmark for constraint adherence in multi-turn LLM-assisted scientific ideation. It pairs 38 research briefs from 24 scientific domains, each with hard constraints and banned moves, with four interaction conditions and seven models from five providers (two open-weight), scored o",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "AirFM-DDA: Air-Interface Foundation Model in the Delay-Doppler-Angle Domain for AI-Native 6G",
    "link": "https://arxiv.org/abs/2605.00020",
    "description": "arXiv:2605.00020v3 Announce Type: replace-cross Abstract: The success of large foundation models is catalyzing a new paradigm for AI-native 6G network design: wireless foundation models for physical-layer design. However, existing models often operate on channel state information (CSI) in the spatial-temporal-frequency (STF) domain, where multipath components are superimposed and structurally entangled. This hinders the learning of a universal channel representation. Their reliance on global att",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "XekRung Technical Report",
    "link": "https://arxiv.org/abs/2605.00072",
    "description": "arXiv:2605.00072v2 Announce Type: replace-cross Abstract: We present XekRung, a frontier large language model for cybersecurity, designed to provide comprehensive security capabilities. To achieve this, we develop diverse data synthesis pipelines tailored to the cybersecurity domain, enabling the scalable construction of high-quality training data and providing a strong foundation for cybersecurity knowledge and understanding. Building on this foundation, we establish a complete training pipelin",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Safety and accuracy diverge across deployment conditions in clinical large language models",
    "link": "https://arxiv.org/abs/2605.04039",
    "description": "arXiv:2605.04039v2 Announce Type: replace-cross Abstract: Clinical large language models (LLMs) are commonly scaled by increasing model size, context length, retrieval complexity, or inference-time compute, on the assumption that higher accuracy implies safer behavior. In medicine, where a few confident or evidence-contradicting errors can outweigh average performance, this assumption may be incomplete. We introduce Safety-Focused Evaluation of Scaling (SaFE-Scale) and instantiate it on RadSaFE-",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Local Intrinsic Dimension Unveils Hallucinations in Diffusion Models",
    "link": "https://arxiv.org/abs/2605.05026",
    "description": "arXiv:2605.05026v2 Announce Type: replace-cross Abstract: Diffusion models are prone to generating structural hallucinations - samples that match the statistical properties of the training data yet defy underlying structural rules, resulting in anomalies like hands with more than five fingers. Recent research studied this failure mode from several viewpoints, offering partial explanations to their occurrence, such as mode interpolation. In this work, we propose a complementary perspective that t",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Build-and-Find: An Effort-Aware Protocol for Evaluating Agent-Managed Codebases",
    "link": "https://arxiv.org/abs/2605.06136",
    "description": "arXiv:2605.06136v2 Announce Type: replace-cross Abstract: Most coding-agent benchmarks ask whether generated code behaves correctly. That remains essential, but repository-level engineering is increasingly agent-managed: one agent writes a repository, and later agents inspect, audit, or extend it as working context. In that setting, a generated repository is not only an answer to a task but also a communication artifact for future work. Even when strong agents nearly satisfy the visible behavior",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "PACZero: PAC-Private Fine-Tuning of Language Models via Sign Quantization",
    "link": "https://arxiv.org/abs/2605.06505",
    "description": "arXiv:2605.06505v3 Announce Type: replace-cross Abstract: Differentially private (DP) zeroth-order (ZO) fine-tuning of large language models (LLMs) inherits DP's harsh utility-privacy trade-off. PAC Privacy, an instance-based notion, offers an alternative. It bounds the mutual information (MI) between the secret input and the output, and calibrates the noise to the stability of the output under the input distribution. We introduce PACZero, a family of ZO fine-tuning mechanisms under PAC Privacy.",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Reformulating KV Cache Eviction Problem for Long-Context LLM Inference",
    "link": "https://arxiv.org/abs/2605.07234",
    "description": "arXiv:2605.07234v2 Announce Type: replace-cross Abstract: Large language models (LLMs) support long-context inference but suffer from substantial memory and runtime overhead due to Key-Value (KV) Cache growth. Existing KV Cache eviction methods primarily rely on local attention weights, neglecting the influence of value representations, output projection, and inter-head interactions. In this work, we reformulate KV Cache eviction from a conventional head-wise, weight-averaging approach into an o",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Ensemble Distributionally Robust Bayesian Optimisation",
    "link": "https://arxiv.org/abs/2605.07565",
    "description": "arXiv:2605.07565v3 Announce Type: replace-cross Abstract: We study zeroth-order optimisation under context distributional uncertainty, a setting commonly tackled using Bayesian optimisation (BO). A prevailing strategy to make BO more robust to the complex and noisy nature of data is to employ an ensemble as the surrogate model, thereby mitigating the weaknesses of any single model. In this study, we propose a novel algorithm for Ensemble Distributionally Robust Bayesian Optimisation that remains",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "RigidFormer: Learning Rigid Dynamics using Transformers",
    "link": "https://arxiv.org/abs/2605.09196",
    "description": "arXiv:2605.09196v2 Announce Type: replace-cross Abstract: Learning-based simulation of multi-object rigid-body dynamics remains difficult because contact is discontinuous and errors compound over long horizons. Most existing methods remain tied to mesh connectivity and vertex-level message passing, which limits their applicability to mesh-free inputs such as point clouds and leads to high computational cost. Efficiently modeling high-fidelity rigid-body dynamics from mesh-free representations th",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Spectral Transformer Neural Processes",
    "link": "https://arxiv.org/abs/2605.09498",
    "description": "arXiv:2605.09498v2 Announce Type: replace-cross Abstract: Time series, spatial data, and images are natural applications of Neural Processes. However, when such data exhibit strong periodicity and quasi-periodicity, existing methods often suffer from underfitting and generalise poorly beyond the training distribution. In this work, we propose Spectral Transformer Neural Processes (STNPs), a frequency-aware extension of Transformer Neural Processes (TNPs). STNPs introduce a Spectral Aggregator th",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Control Charts for Multi-agent Systems",
    "link": "https://arxiv.org/abs/2605.11135",
    "description": "arXiv:2605.11135v2 Announce Type: replace-cross Abstract: Generative agents have proven to be powerful assistants in a wide variety of contexts. Given this success, users are now deploying agents with minimal restrictions in open ended, multi-agent environments. Current methods for monitoring the dynamics of open-ended multi-agent systems are limited to aggregate statistics, qualitative inspection, or detecting change between two fixed timepoints. In this paper, we extend the process-theoretic n",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Hide to See: Reasoning-prefix Masking for Visual-anchored Thinking in VLM Distillation",
    "link": "https://arxiv.org/abs/2605.11651",
    "description": "arXiv:2605.11651v5 Announce Type: replace-cross Abstract: Recent think-answer approaches in VLMs, such as Qwen3-VL-Thinking, boost reasoning performance by leveraging intermediate thinking steps before the final answer, but their computational cost becomes substantial, especially for larger VLMs. To distill such capabilities into compact think-answer VLMs, a primary objective is to improve the student's ability to utilize visual evidence throughout its reasoning trace, as long think-answer trace",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Negation Neglect: When models fail to learn negations in training",
    "link": "https://arxiv.org/abs/2605.13829",
    "description": "arXiv:2605.13829v2 Announce Type: replace-cross Abstract: We introduce Negation Neglect, where finetuning LLMs on documents that flag a claim as false makes them believe the claim is true. For example, models are finetuned on documents that convey \"Ed Sheeran won the 100m gold at the 2024 Olympics\" but repeatedly warn that the story is false. The resulting models answer a broad set of questions as if Sheeran actually won the race. This occurs despite models recognizing the claim as false when th",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Generalized Priority-Aware Shapley Value",
    "link": "https://arxiv.org/abs/2605.15018",
    "description": "arXiv:2605.15018v2 Announce Type: replace-cross Abstract: Shapley value and its priority-aware extensions are widely used for valuation in machine learning, but existing methods require pairwise priority to be binary and acyclic, a restriction spectacularly violated in real-data examples such as aggregated human preferences and multi-criterion comparisons. We introduce the generalized priority-aware Shapley value (GPASV), a random order value defined on arbitrary directed weighted priority graph",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Flow-Direct: Feedback-Efficient and Reusable Guidance for Flow Models via Non-Parametric Guidance Field",
    "link": "https://arxiv.org/abs/2605.16348",
    "description": "arXiv:2605.16348v2 Announce Type: replace-cross Abstract: Training-free guidance enables pre-trained diffusion and flow models to optimize application-specific objectives using feedback from external black-box reward functions. However, existing methods are feedback-inefficient because reward feedback is used only transiently to inform a localized gradient approximation or a discrete search decision, and is subsequently discarded. To address this limitation, we propose Flow-Direct, a framework t",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Smooth Piecewise Cutting for Neural Operator to Handle Discontinuities and Sharp Transitions",
    "link": "https://arxiv.org/abs/2605.19823",
    "description": "arXiv:2605.19823v3 Announce Type: replace-cross Abstract: Neural operators have achieved strong performance in learning solution operators of partial differential equations (PDEs), but their inherently continuous representations struggle to capture discontinuities and sharp transitions. Existing approaches typically approximate such features within continuous function spaces, often requiring increased model capacity and high-resolution data. In this work, we propose Cut-DeepONet, a two-stage tra",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Probability-Conserving Flow Guidance",
    "link": "https://arxiv.org/abs/2605.20079",
    "description": "arXiv:2605.20079v2 Announce Type: replace-cross Abstract: Diffusion and flow-based generative models dominate visual synthesis, with guidance aligning samples to user input and improving perceptual quality. However, Classifier-Free Guidance (CFG) and extrapolation-based methods are heuristic linear combinations of velocities/scores that ignore the generative manifold geometry, breaking probability conservation and driving samples off the learned manifold under strong guidance. We analyse guidanc",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Provably Learning Diffusion Models under the Manifold Hypothesis: Collapse and Refine",
    "link": "https://arxiv.org/abs/2605.20235",
    "description": "arXiv:2605.20235v2 Announce Type: replace-cross Abstract: Diffusion models generate high-dimensional data with remarkable quality, yet how training discovers and exploits low-dimensional manifold structure remains incompletely understood. We analyze a two-stage collapse-and-refine procedure motivated by the small-noise score: its singular normal component identifies manifold projection as the leading denoising target, while the remaining correction encodes density and geometry. Under suitable as",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Mechanisms of Misgeneralization in Physical Sequence Modeling",
    "link": "https://arxiv.org/abs/2605.20299",
    "description": "arXiv:2605.20299v2 Announce Type: replace-cross Abstract: Generative sequence models are often trained to plan motion in physical domains, from robotics to mechanical simulations. When constructing a dataset to train such a model, engineers may curate demonstrations to specify how trajectories should be distributed over a physical quantity like travel distance or mechanical energy. For example, a roboticist building a maze navigation agent might choose demonstrations whose travel distances cover",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Benchmarking Patent Embeddings: A Multi-Task Evaluation of 22 Models Across Retrieval, Classification, and Clustering",
    "link": "https://arxiv.org/abs/2605.24297",
    "description": "arXiv:2605.24297v3 Announce Type: replace-cross Abstract: Two questions regarding practitioners' use of patent embeddings arise: (i) Does one fine-tuning recipe suffice for all downstream applications? (ii) Is fine-tuning on one patent landscape sufficient for downstream application on other landscapes? By evaluating 22 pre-trained embedding models (ranging from 22M to 12B parameters) on three tasks -- information retrieval, classification, and clustering -- on 113,148 WIPO patents for assistive",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "LAPLEX: The FFT of Learnable Laplace Kernels",
    "link": "https://arxiv.org/abs/2605.24584",
    "description": "arXiv:2605.24584v3 Announce Type: replace-cross Abstract: Fast matrix--vector multiplication in deep learning usually comes with a choice: fixed geometry and exact computation, as in the fast Fourier transform (FFT), or adaptive geometry paid for by dense parameters, random features, or low-rank surrogates. To move beyond this trade-off, we introduce LAPLEX, a class of exact, trainable (phased) Laplace-kernel operators. A LAPLEX layer is a typically full-rank dense matrix, implicitly defined by ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Evidence-Linked Radiology Reporting: A Human-Supervised Reference Architecture for Structured Imaging Intelligence",
    "link": "https://arxiv.org/abs/2605.25120",
    "description": "arXiv:2605.25120v2 Announce Type: replace-cross Abstract: Radiology reports remain the primary mechanism by which imaging findings are communicated to clinical teams. However, much of the structured information behind these reports, including measurements, image evidence, prior comparisons, lesion identity, uncertainty, and terminology, often remains trapped in free text or fragmented across picture archiving and communication systems, radiology information systems, reporting workstations, works",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Jailbreak susceptibility prediction and mitigation via the behavioral geometry of models",
    "link": "https://arxiv.org/abs/2605.26409",
    "description": "arXiv:2605.26409v2 Announce Type: replace-cross Abstract: Evaluating and mitigating a generative system's susceptibility to jailbreak attacks is critical to its safe deployment. Given the number of deployable systems, full per-configuration evaluation and optimization is impractical. In this paper, we formalize the behavioral geometry of a population of models that, by leveraging previously evaluated and defended models, supports both efficient susceptibility prediction and effective defense tra",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Measuring Form and Function in Language Models",
    "link": "https://arxiv.org/abs/2605.28616",
    "description": "arXiv:2605.28616v2 Announce Type: replace-cross Abstract: We introduce quantitative metrics for child language acquisition to evaluate language models. Our focus is on the formal syntactic and functional discourse properties of determiners in English, which young children acquire early and accurately. We propose Contextual Alternative Choice (CAC), a new prompting method which provides targeted tests for both syntactic and discourse knowledge of language. The method enables direct comparison of ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "SCDBench: A Benchmark for LLM-Based Smart Contract Decompilers",
    "link": "https://arxiv.org/abs/2605.29059",
    "description": "arXiv:2605.29059v2 Announce Type: replace-cross Abstract: Smart contract decompilation aims to recover high-level source code from bytecode, but evaluating decompilers remains difficult because existing studies use narrow datasets, inconsistent metrics, and limited semantic consistency checks. This gap is increasingly important as large language models (LLMs) begin to generate source-like Solidity that may compile and appear plausible, even when its semantics diverge from the original contract. ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Fine-Tuned Language Models Exhibit Improved Information Conveyance",
    "link": "https://arxiv.org/abs/2605.30844",
    "description": "arXiv:2605.30844v2 Announce Type: replace-cross Abstract: Fine-tuning is often believed to reduce uncertainty and diversity in large language models, but existing analyses overlook output length, a key confounder, and therefore fail to capture how uncertainty is distributed across an entire generation rollout. To address this, we propose Canopy Entropy ($\\mathrm{CE}^\\star$), a measure that views language generation from a tree perspective, where \"canopy\" represents the space of all possible roll",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "STEP: Learning STructured Embeddings for Progressive Time Series",
    "link": "https://arxiv.org/abs/2605.31061",
    "description": "arXiv:2605.31061v2 Announce Type: replace-cross Abstract: We present a novel method for learning interpretable representations of progressive time series, that is, data capturing irreversible state transitions such as degradation or task completion. Our approach uses a self-supervised contrastive objective to learn a low-dimensional latent space whose geometry is itself the interpretation: each observation becomes a point on a manifold anchored between two fixed orthogonal prototype vectors, and",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Subspace-Aware Sparse Autoencoders for Effective Mechanistic Interpretability",
    "link": "https://arxiv.org/abs/2606.06333",
    "description": "arXiv:2606.06333v2 Announce Type: replace-cross Abstract: Sparse Autoencoders (SAEs) are widely used for mechanistic interpretability in large language models, yet their standard formulation assigns each latent feature a single decoder direction, implicitly assuming features to be one-dimensional. We show that this assumption can induce feature splitting when model features are multi-dimensional. Geometrically, accurately reconstructing a feature under a fixed co-activation budget can require ex",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "RiskFlow: Fast and Faithful Safety-Critical Traffic Scenario Generation",
    "link": "https://arxiv.org/abs/2606.06423",
    "description": "arXiv:2606.06423v2 Announce Type: replace-cross Abstract: Safety-critical traffic scenario generation is essential for evaluating autonomous driving systems under rare but high-risk interactions. Existing diffusion-based methods offer strong controllability in closed-loop generation, but their iterative denoising process is computationally expensive and may accumulate sampling and guidance errors over long rollouts, causing unrealistic motion artifacts such as abnormal acceleration and off-road ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Characterize Then Distill: Mechanistic Reasoning in Large Output Spaces",
    "link": "https://arxiv.org/abs/2606.06840",
    "description": "arXiv:2606.06840v5 Announce Type: replace-cross Abstract: Reasoning-trained language models can select, zero-shot, a small set of relevant labels from thousands to hundreds of thousands of candidates. We ask how they do it mechanistically, and whether the mechanism can be distilled. We treat each decision as a token-level event scored by the model's own margin: the token that picks a coarse region of the label space, the tokens that pick a label within it, and the token where the output departs ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "The Standard Interpretable Model: Design interpretable machine learning methods from elementary symmetries",
    "link": "https://arxiv.org/abs/2606.12289",
    "description": "arXiv:2606.12289v4 Announce Type: replace-cross Abstract: As Artificial Intelligence models grow in complexity, interpretability has become an indispensable tool for understanding, debugging, and controlling their computations. However, interpretability lacks general theories to deductively design interpretable methods. This gap between theories and methods results in a fragmented literature and inconsistent evaluation protocols. To fill this gap, we introduce the Standard Interpretable Model (S",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Real-Time Execution with Autoregressive Policies",
    "link": "https://arxiv.org/abs/2606.13355",
    "description": "arXiv:2606.13355v2 Announce Type: replace-cross Abstract: Real-time execution, enabled by asynchronous inference that ensures both smooth action trajectories and fast reactivity, is critical for realistic deployments of large-scale Vision-Language-Action models. However, recent work on real-time execution primarily focuses on variants of diffusion policies, even though it is more critical for autoregressive policies given their slower rollout speed in synchronous inference. In contrast, we demon",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Embedded Arena: Iterative Optimization via Hardware Feedback",
    "link": "https://arxiv.org/abs/2606.16190",
    "description": "arXiv:2606.16190v2 Announce Type: replace-cross Abstract: As AI moves into the physical world, from robots to environmental sensors to medical wearables, it increasingly relies on local inference to meet latency, communication, or privacy constraints. Optimizing models for heterogeneous edge hardware such as microcontrollers (MCUs) requires simultaneously satisfying hard physical constraints on memory, power, and temperature while preserving accuracy, a multidimensional optimization that is toda",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "SDS-LoRA: Overcoming Anisotropic Gradient Scaling in Low-Rank Adaptation",
    "link": "https://arxiv.org/abs/2606.16454",
    "description": "arXiv:2606.16454v4 Announce Type: replace-cross Abstract: Low-Rank Adaptation (LoRA) enables efficient adaptation of large pretrained models to downstream tasks by parameterizing weight updates with low-rank matrices. In this paper, we investigate the limitations of the LoRA parameterization from a geometric perspective. Specifically, we show that when a full fine-tuning gradient is backpropagated to the low-rank matrices, it undergoes anisotropic scaling driven by their singular values. We argu",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "AI out-persuades expert humans in text-based dialogue",
    "link": "https://arxiv.org/abs/2606.16475",
    "description": "arXiv:2606.16475v2 Announce Type: replace-cross Abstract: Many societal decisions are settled by contests of persuasion. Conversational AI is a powerful new entrant in these contests, but whether it can out-persuade skilled and highly incentivized humans has remained unclear. Here, in a series of four preregistered experiments (n = 18,978 conversations from 6,923 people), we pitted AI systems against a range of human persuaders, including laypeople, winners of a separately preregistered four-rou",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Exposing the Illusion of Erasure in Knowledge Editing for LLMs",
    "link": "https://arxiv.org/abs/2606.23276",
    "description": "arXiv:2606.23276v3 Announce Type: replace-cross Abstract: Knowledge Editing (KE) has emerged as a frontier for updating specific facts in LLMs without costly retraining, but its reliability and underlying mechanisms remain poorly understood. In this work, we examine KE from an adversarial elicitation perspective, revealing that edited knowledge is often not fully erased and continues to surface, with consistent failures observed across diverse model architectures. To explain this behavior, we co",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "NoContactNoWorries: Estimating Contact through Vision and Proprioception for In-Hand Dexterous Manipulation",
    "link": "https://arxiv.org/abs/2606.24450",
    "description": "arXiv:2606.24450v2 Announce Type: replace-cross Abstract: Perceiving physical contact is fundamental to dexterous manipulation. While robots often rely on dedicated hardware tactile sensors, humans exhibit a remarkable ability to infer contact by integrating visual information with an innate sense of their body's pose and movement. Inspired by this embodied perceptual skill, we investigate whether a robot can learn to infer contact from vision, an approach that also offers a scalable alternative",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "OperatorSHAP: Fast and Accurate Shapley Value Estimation for Neural Operators",
    "link": "https://arxiv.org/abs/2606.28065",
    "description": "arXiv:2606.28065v2 Announce Type: replace-cross Abstract: Understanding model predictions is essential for physical applications, where outputs often inform safety-critical decisions, such as structural load assessment, weather warnings, and clinical diagnosis. Shapley values satisfy many desirable properties as an attribution method, but their computational cost during inference hinders their practical use. Current amortized explainers, such as FastSHAP, are limited to homogeneous inputs, which",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "MCP Server Architecture Patterns for LLM-Integrated Applications",
    "link": "https://arxiv.org/abs/2606.30317",
    "description": "arXiv:2606.30317v2 Announce Type: replace-cross Abstract: The Model Context Protocol (MCP), introduced by Anthropic in November 2024, defines a standardized interface for connecting large language models (LLMs) to external tools, data sources, and services. Within months of release, hundreds of community-built MCP servers appeared on GitHub, but no software-maintenance literature has yet described how the ecosystem is being structured in production. This industry experience paper catalogues five",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Steering Training Trajectories in Diffusion Representation Learning",
    "link": "https://arxiv.org/abs/2607.05319",
    "description": "arXiv:2607.05319v2 Announce Type: replace-cross Abstract: Across training runs of a diffusion autoencoder, we observe similar image reconstruction quality, but substantially different levels of disentanglement in the learned representations. In this work, we study how training dynamics contribute to this behaviour. By analysing training trajectories in a controlled setting - curves of reconstruction quality against disentanglement during training - we identify two recurring trajectory patterns, ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Decomposing Yes-No Bias in LLM Moral Judgment: Stance, Position, Word, and Verdict",
    "link": "https://arxiv.org/abs/2607.05552",
    "description": "arXiv:2607.05552v2 Announce Type: replace-cross Abstract: Large language models (LLMs) increasingly issue binary verdicts - safety gates, judge decisions, value probes - and the answer is read as the model's judgment. A settled judgment should be coherent across paired phrasings of the same question: yes to \"do you approve?\" should mirror no to \"do you oppose?\". LLMs often violate this coherence, and in a yes/no question the verdict, the answer word, and the printed position coincide, so a conve",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Beyond Bayesian Nash: Learning Minimax-Regret Equilibria for Adversarial Team Games under Asymmetric Information",
    "link": "https://arxiv.org/abs/2607.09993",
    "description": "arXiv:2607.09993v2 Announce Type: replace-cross Abstract: Adversarial team games (ATGs) with asymmetric information, such as adversarial path-finding, goal search, and reachability games on graphs, require strategies that are robust to hidden opponent types, such as a hidden goal flag, and to deception. Under asymmetric information, deception is seen as strategic shifts in the type distribution such that the omniscient opponent can collude with Nature and condition its play on the observed type.",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "PRISM: Stress-Testing Alignment-Faking Claims",
    "link": "https://arxiv.org/abs/2607.13346",
    "description": "arXiv:2607.13346v2 Announce Type: replace-cross Abstract: We judge whether AI systems are safe largely by watching how they behave. Alignment faking would break this: a model that behaves well only when it believes it is watched, or that complies now to avoid being changed by training, can pass every behavioral test. Such behavior has been reported in a frontier model, and open-weight models that comply more under a monitoring prompt are now read as showing it, with hidden-state probes proposed ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "MATE: Asynchronous Multi-Rate Diffusion Policy Composition",
    "link": "https://arxiv.org/abs/2607.17257",
    "description": "arXiv:2607.17257v2 Announce Type: replace-cross Abstract: Diffusion policies have shown strong potential for robotic imitation learning, and recent extensions incorporate additional modalities to improve manipulation performance. However, these modalities often differ not only in information content but also in sensing rates and inference latencies. Existing multimodal diffusion policies typically rely on synchronous fusion or manually designed multi-frequency architectures, which either slow do",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Curved Knowledge in Flat Models: Building Expert AI at Scale",
    "link": "https://arxiv.org/abs/2607.17513",
    "description": "arXiv:2607.17513v3 Announce Type: replace-cross Abstract: Intelligence that must act before outside correction arrives must carry the structure of its expert knowledge, and hyperbolic geometry represents hierarchy with a fidelity no Euclidean space of comparable dimension matches. Yet hyperbolic language models confine that geometry to adapters or rebuild the transformer, and an independent audit of released hyperbolic vision language checkpoints finds their hierarchy mechanisms inactive, which ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Broken Gates: Re-evaluating Web Bot Defenses in the Age of LLM Agents",
    "link": "https://arxiv.org/abs/2607.18659",
    "description": "arXiv:2607.18659v2 Announce Type: replace-cross Abstract: The rapid emergence of web automation across commercial crawlers, solver services, and LLM-based browser agents has created new challenges for defenses that must distinguish legitimate automated activity from scalable abuse. In response, modern bot defenses increasingly replace explicit challenges with risk-based decisions over browser, session, identity, and behavioral signals. This paper explores how current automation stacks can bypass",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Reasoning Before Translation: Enhancing Legal Machine Translation with Structured Reasoning",
    "link": "https://arxiv.org/abs/2607.19181",
    "description": "arXiv:2607.19181v2 Announce Type: replace-cross Abstract: Neural machine translation (NMT) in the legal domain is a linguistically and conceptually demanding task, primarily due to the complexity of legal language and the high level of precision it requires. The recent emergence of reasoning-capable language models opens new possibilities for tackling such challenges. They add to a set of other previously proposed techniques to enhance the translation quality, which includes supervised fine-tuni",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "From Trajectories to Prefixes: Reusing Teacher Trajectories via Replayed Prefixes and Online Continuation",
    "link": "https://arxiv.org/abs/2607.19395",
    "description": "arXiv:2607.19395v2 Announce Type: replace-cross Abstract: Small language models are attractive backbones for interactive agents, but direct distillation from strong teacher trajectories often turns rich multi-turn behavior into one-shot imitation targets. This is inefficient in long-horizon environments, where early decisions shape later states and rewards. We propose Prefix-GRPO, a reinforcement learning framework that decomposes teacher trajectories into replay-aligned prefix queries and onlin",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Detecting Knowledge Inconsistencies Across Text, Tables, and Knowledge Graphs",
    "link": "https://arxiv.org/abs/2607.25959",
    "description": "arXiv:2607.25959v3 Announce Type: replace-cross Abstract: Wikipedia and Wikidata are widely used for information access, LLM pre-training, and retrieval-augmented generation. Their knowledge is deeply connected but scattered across text, tables, and knowledge graphs. This raises a practical question: when these modalities disagree, how can we detect and explain the conflict? We study this problem as modality-level inconsistency detection. We first introduce a taxonomy of cross-modal knowledge in",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "VibeLifeBench: Can Your Life Agent Be Proactive and Persistent in a Living World?",
    "link": "https://arxiv.org/abs/2608.10875",
    "description": "arXiv:2608.10875v3 Announce Type: replace-cross Abstract: Large language model (LLM) agents are increasingly deployed as personal assistants. Existing evaluations, however, mostly use short, self-contained requests in static environments. Everyday life assistance is different. A task runs for weeks rather than minutes. The world keeps changing while the agent is not being prompted. Many constraints are never stated outright. An agent that merely answers the request in front of it will fail at su",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Learning to Persuade Exposes How Easily LLMs Abandon Correct Beliefs",
    "link": "https://arxiv.org/abs/2608.11624",
    "description": "arXiv:2608.11624v2 Announce Type: replace-cross Abstract: Persuasion is a core dynamic of natural language communication, shaping how large language models (LLMs) update beliefs, resolve disagreements, and reach decisions. As LLMs increasingly debate, advise, and think collaboratively with humans and each other, resistance to harmful persuasion becomes a core requirement for reliable behavior. Yet a single targeted persuasive argument can be enough to collapse model accuracy to near zero, even w",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "LittleLearner: Language Models Under Pedagogically Controlled Knowledge Exposure",
    "link": "https://arxiv.org/abs/2608.13545",
    "description": "arXiv:2608.13545v3 Announce Type: replace-cross Abstract: Modern language models are trained on heterogeneous web-scale text corpora. Consequently, studying knowledge and skill acquisition is difficult, as prior exposure to related content is hard to characterize. To address this challenge, we introduce LittleCurriculum, a curated 88B-token pretraining corpus tailored to U.S. elementary school material, explicitly excluding concepts, facts, and vocabulary taught above Grade 5. Training a 5B-para",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Discretizing Continuous Time Series for Imputation with Masked Diffusion Training",
    "link": "https://arxiv.org/abs/2608.19119",
    "description": "arXiv:2608.19119v2 Announce Type: replace-cross Abstract: Time series imputation is a crucial area for reliable time series analysis, yet it remains challenging due to the complex temporal dynamics and noise of real-world data. Existing approaches, however, exhibit two limitations: missing and observed values are embedded within the same representation space without explicit structural separation, and continuous diffusion-based methods recover the missing values only through many iterative denoi",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Finding and using interpretable latents in a neutrino foundation model with sparse autoencoders",
    "link": "https://arxiv.org/abs/2608.26090",
    "description": "arXiv:2608.26090v2 Announce Type: replace-cross Abstract: We present a first application of sparse-autoencoder-based mechanistic interpretability to particle physics. Studying a neutrino foundation model pretrained on IceCube data and fine-tuned for direction reconstruction, we identify a validated atlas of physical concepts in the model representation, using a strict validation protocol consisting of held-out tests, matched nuisance controls, and replication across independent dictionary traini",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Benchmark Contamination: A Taxonomy Organized by Defeated Mitigation",
    "link": "https://arxiv.org/abs/2608.29463",
    "description": "arXiv:2608.29463v2 Announce Type: replace-cross Abstract: A benchmark score is a joint property of the model, the evaluation harness, the elicitation budget, the sampled population, and contamination status. Leaderboards publish the model and the score, so capability and leakage stay observationally equivalent. Existing taxonomies classify contamination for automated detection, not the question a reporter faces at publication: given the mitigations already applied, which validity threats remain ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "BiG-SURE - Bipartite Graph for Semantic Uncertainty and Reliability Estimation of LLMs",
    "link": "https://arxiv.org/abs/2608.30646",
    "description": "arXiv:2608.30646v3 Announce Type: replace-cross Abstract: Reliable uncertainty estimation is a crucial requirement for deploying large language models (LLMs) and vision-language models (VLMs) in safety-critical settings, especially when the model parameters are not accessible (black-box). We propose BiG-SURE, an uncertainty estimator based on cross-temperature semantic agreement. The method samples low-temperature responses as stable semantic anchors and high-temperature responses as probes unde",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Anatomy of LLM Sycophancy: What a Flip Rate Hides",
    "link": "https://arxiv.org/abs/2610.06522",
    "description": "arXiv:2610.06522v2 Announce Type: replace-cross Abstract: A model under pushback can correct itself, capitulate, or hold, and one flip rate counts a correction and a capitulation alike. SycoLens, a modular replay protocol, measures flip rates from replays of an item, a committed answer, and one scripted user line, each against a matched control with the line deleted. Pushback wording, committed text, answer format, boundary distance, and ground truth become factors of one instrument, where earli",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Learning to Simulate Individuals from Macro Social Signals",
    "link": "https://arxiv.org/abs/2610.07062",
    "description": "arXiv:2610.07062v2 Announce Type: replace-cross Abstract: Large language models are increasingly used to simulate how individuals respond to new situations, yet the behavioral reasoning behind these responses is either inherited from pretraining or learned from individual-level annotations, which offer limited behavioral diversity and little supervision of the reasoning itself. We propose to learn behavioral reasoning from prediction markets, whose price trajectories record how populations respo",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "VOMMI: Collecting and Leveraging Portable Demonstrations for Mobile Manipulation",
    "link": "https://arxiv.org/abs/2610.08220",
    "description": "arXiv:2610.08220v2 Announce Type: replace-cross Abstract: Portable mobile-manipulation demonstrations can help alleviate data scarcity for embodied intelligence, but obtaining reliable, low-cost, and robot-free motion supervision from RGB observations remains challenging. Existing approaches often rely on teleoperation or specialized devices equipped with additional sensing hardware, while directly using estimated visual odometry (VO) trajectories can introduce inconsistencies due to accumulated",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "MetaEncoder: Exploring the Limit of Bi-Encoders for Multimodal System One Decision Making with Natural Language Interface",
    "link": "https://arxiv.org/abs/2610.11316",
    "description": "arXiv:2610.11316v2 Announce Type: replace-cross Abstract: System One models prioritize fast, low-latency decision-making and calibrated probability distributions over token generation. While prevailing systems rely on structured schemas and typed outputs, candidate-scoring trade-offs remain poorly understood. We systematically investigate the scaling dynamics, accuracy, and inference efficiency of three scoring architectures adapted from a pre-trained decoder: bi-encoders, cross-encoders, and co",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Diffusion-Steering-Based MPC with a JEPA World Action Model",
    "link": "https://arxiv.org/abs/2610.12407",
    "description": "arXiv:2610.12407v2 Announce Type: replace-cross Abstract: World action models (WAMs) predict actions and future observations, typically from a reconstruction-based representation that carries noisy, redundant information which can complicate downstream predictions. We introduce LeWAM, a bidirectional transformer for forward, backward, inverse dynamics and policy prediction, on a decoder-free JEPA latent trained end-to-end through all four modes. We see the following benefits: 1) Alignment: linea",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Adversarial Detection for Pre-trained Classifiers via Lipschitz-Margin Analysis with Certification",
    "link": "https://arxiv.org/abs/2610.15359",
    "description": "arXiv:2610.15359v2 Announce Type: replace-cross Abstract: Deep classifiers deployed in safety-critical services like autonomous-driving perception remain vulnerable to small adversarial perturbations. Certified $\\ell_2$ defenses today face a costly trade-off: randomized smoothing (RS) requires hundreds of noisy queries per input, while Lipschitz networks (LN) constrain the architecture and sacrifice clean accuracy. We take a detection-oriented approach instead: rather than certifying that predic",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "PriorityFEC: Deadline-Aware Streaming FEC for KV-Cache Handoff in Edge Multi-Agent Systems",
    "link": "https://arxiv.org/abs/2610.21390",
    "description": "arXiv:2610.21390v3 Announce Type: replace-cross Abstract: Collaborative edge large language model (LLM) systems often require repeated prefill computation when task contexts are transferred between agents. Reusing previously computed key--value (KV) caches can eliminate this overhead, but requires KV-cache delivery before the receiving agent begins decoding. Under strict deadlines and unreliable edge links, complete KV cache transfer may be infeasible, making the timely delivery of useful KV inf",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Explore Separately, Adopt Selectively: Execution-Guided Tool Use over Large Tool Libraries",
    "link": "https://arxiv.org/abs/2610.22688",
    "description": "arXiv:2610.22688v2 Announce Type: replace-cross Abstract: Enterprise LLM agents using growing tool catalogs must surface capabilities as workflows evolve without flooding context or committing to the wrong tool. Adaptive retrieval can expose new capabilities, but when several tools seem plausible, probing them sequentially can stop at an early failure or leave failed attempts in the agent context. We present BRIA (BRanch-Inspect-Adopt), a plug-and-play method that investigates candidates in isol",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "The As-If Machine: Personalized AI counterfactuals make distant policy risks feel close",
    "link": "https://arxiv.org/abs/2610.33301",
    "description": "arXiv:2610.33301v2 Announce Type: replace-cross Abstract: Life experiences can shape policy attitudes, but we only live one life. Citizens may therefore fail to support policies addressing risks they have never personally experienced. Narratives can make such risks immediate and personal, but personalized stories remain difficult to produce at scale. Here we ask whether AI can make distant scenarios feel concrete by simulating a participant's life as if that scenario occurred. We present the As-",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "What Makes a Question Curious? Measuring Model Curiosity in Human-LLM Interactions",
    "link": "https://arxiv.org/abs/2610.33950",
    "description": "arXiv:2610.33950v2 Announce Type: replace-cross Abstract: Large language models increasingly act as partners in everyday communication. In these interactions, useful assistance may require not only answering, but also asking the right questions that surface knowledge gaps, assumptions, and alternatives. In this study, we refer to such epistemic question-asking as model curiosity, and introduce a theory-grounded taxonomy that distinguishes curiosity-oriented questions from generic model questioni",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Making Sense of Audience Change: Causal Attribution and Boundary Management on Xiaohongshu",
    "link": "https://arxiv.org/abs/2610.38026",
    "description": "arXiv:2610.38026v3 Announce Type: replace-cross Abstract: Recommendation-driven platforms can reshape not only what users see, but also who becomes visible and how community boundaries are negotiated. We examine Xiaohongshu discussions surrounding a perceived World Cup-related audience influx to understand how users attributed community change and how those explanations related to boundary-management strategies. We analyzed 262 comments from eight high-engagement threads using researcher-led the",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Prompt Lottery in LLM-as-a-Judge: Measuring and Mitigating Sensitivity to Syntactic Rephrasing",
    "link": "https://arxiv.org/abs/2610.38076",
    "description": "arXiv:2610.38076v2 Announce Type: replace-cross Abstract: LLM-as-a-Judge has become a standard for evaluating large language models, yet most approaches implicitly assume that a single judge prompt functions as a stable evaluation instrument. Prior work has primarily explored deliberate prompt modifications such as scoring rubrics, role descriptions, or chain-of-thought reasoning in order to optimize accuracy. In contrast, we investigate whether validated prompt variants intended to preserve eva",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "LLMs as Judges and Examinees for Medical Item Difficulty Prediction",
    "link": "https://arxiv.org/abs/2610.38402",
    "description": "arXiv:2610.38402v2 Announce Type: replace-cross Abstract: Predicting medical item difficulty from item text alone remains challenging. Prior work has largely relied on linguistic features or text representations derived from general-purpose and domain-specific language models, but predictive performance has remained modest. This study takes a different approach by using difficulty-related signals that emerge when open-weight large language models (LLMs) interact with test items. Using USMLE and ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "STAR: Steering Action Representations with Proprioception for VLA Inference",
    "link": "https://arxiv.org/abs/2610.41009",
    "description": "arXiv:2610.41009v2 Announce Type: replace-cross Abstract: Vision-language-action models (VLAs) map language instructions and visual observations to robot actions, showing strong capabilities across robotic manipulation tasks. However, in our probing experiment, we find that action representations near the action output do not fully preserve task-relevant visual grounding. Motivated by this late-layer grounding gap, we introduce STAR, for STeering Action Representations, a training-free inference",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "When Disclosure Is Compulsory: Evaluating Ride-Hailing Rebalancing Policies with Self-Interested LLM Driver Agents",
    "link": "https://arxiv.org/abs/2610.41132",
    "description": "arXiv:2610.41132v3 Announce Type: replace-cross Abstract: The EU Platform Work Directive, to be transposed by December 2026, requires ride-hailing platforms to state in plain language the main parameters of their automated decisions and how a worker's behaviour affects them. Such rules are exactly what a large language model (LLM) can read, so drivers will be able to let one decide for them. We compare two main families of rebalancing policy once their rules are public: a reactive policy (R) tha",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Behavior Graphs: Unsupervised Graph Structures for Interpreting Robot Deployment Data",
    "link": "https://arxiv.org/abs/2611.00405",
    "description": "arXiv:2611.00405v2 Announce Type: replace-cross Abstract: Data flywheels promise continuous improvement via insights from deployment data. Understanding how the deployed model succeeds and fails can steer subsequent data collection towards patching failures and reinforcing successes. However, robot deployments create large volumes of high-dimensional rollout data, which is challenging to understand and confidently ground data collection decisions in. To make deployment data easier to analyze and",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "A Spectral Renormalization-Group View of Learning",
    "link": "https://arxiv.org/abs/2611.00422",
    "description": "arXiv:2611.00422v2 Announce Type: replace-cross Abstract: We study how the layers in deep neural networks (NNs) converge, using Wilsonian Renormalization-Group (RG) ideas to organize the spectral picture. During training, these layers often develop heavy-tailed power-law (PL) spectra, and the strongest checkpoints often appear near the PL exponent $\\alpha\\approx 2$. This pattern raises a simple question: why should this value mark a well-trained layer? The answer is both statistical and physical",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "CuriousTogether: Implications of Curiosity and Cultural Grounding in Multi-Agent LLM Interactions",
    "link": "https://arxiv.org/abs/2611.01301",
    "description": "arXiv:2611.01301v2 Announce Type: replace-cross Abstract: Large Language Models (LLMs) are increasingly deployed in multi-agent settings, exhibiting emergent collective behaviors, yet the role of curiosity as a driver of such dynamics remains understudied. We introduce CuriousTogether, a framework evaluating curiosity-driven multi-agent LLM interactions across three complementary dimensions: novelty-seeking, epistemic and social curiosity. Across eight tasks spanning reasoning, creative generati",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Iterative Gumbel Planning for Continuous Control",
    "link": "https://arxiv.org/abs/2611.02236",
    "description": "arXiv:2611.02236v2 Announce Type: replace-cross Abstract: Search-based planning remains a powerful policy improvement paradigm in reinforcement learning, driving milestone successes in discrete domains. However, extending this paradigm to continuous control exposes a structural mismatch: search evaluates a finite set of action candidates, whereas continuous RL typically relies on Gaussian policies. We show that winner-action distillation into a continuous Gaussian induces a \\textit{projection er",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Maswao: An automatically collected, prepared, and benchmarked dataset for South African Sign Language",
    "link": "https://arxiv.org/abs/2611.02903",
    "description": "arXiv:2611.02903v2 Announce Type: replace-cross Abstract: Recent advancements in sign language processing can be attributed to developments in both large-scale dataset collection and algorithmic complexity in areas such as pose estimation techniques, signal processing through Transformer models, and model optimization. However, only a handful of sign languages, such as the American, British, and German, from over 200 globally recognized sign languages, reap the benefits of such advancements, whi",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Beyond Accuracy: What Language-Subspace Interventions Capture, Remove, and Improve",
    "link": "https://arxiv.org/abs/2611.05278",
    "description": "arXiv:2611.05278v2 Announce Type: replace-cross Abstract: Language-subspace interventions aim to improve multilingual reasoning by suppressing language-related components in mid-layer activations. Using MATH and MGSM across four open-weight LLMs, we ask three questions: do estimated language subspaces capture translation-associated variation? Does projecting them out remove language information? And do they improve accuracy without compromising response language? For the first question, we build",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "DARE: Difficulty Analysis for Repair Enhancement",
    "link": "https://arxiv.org/abs/2611.05797",
    "description": "arXiv:2611.05797v2 Announce Type: replace-cross Abstract: LLM-based coding agents are primarily evaluated by their solve rates. However, this metric does not reveal how difficult the solved tasks are or account for differences in task difficulty across benchmarks. Determining the difficulty of individual tasks by repeatedly running multiple agents is costly, while a predicted difficulty score alone provides limited guidance on what support an agent needs. To address these challenges, we propose ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Today's Work, Tomorrow's Workforce: Incentivizing Learning in AI-Assisted Work",
    "link": "https://arxiv.org/abs/2611.06346",
    "description": "arXiv:2611.06346v2 Announce Type: replace-cross Abstract: At work, people develop skills through experience: novices acquire skills by completing tasks, while experts retain theirs through continued practice. AI assistance changes this process by offering workers a choice between solving tasks independently and accepting the AI's answers. While relying on AI saves immediate effort, it can also displace the practice needed to acquire and retain skills, including those required to oversee the AI. ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Route First, See Later: Enabling Vision Agents to Reason Scientifically by Separating Routing Policy from Action Spaces",
    "link": "https://arxiv.org/abs/2611.06760",
    "description": "arXiv:2611.06760v2 Announce Type: replace-cross Abstract: Scientific image-analysis workflows require agents to select among diverse capabilities like description, detection, counting, and segmentation. Current multi-tool architectures conflate intent interpretation with visual execution, masking whether a failure arises from flawed reasoning (misrouting) or failed perception (invalid tool execution). This lack of auditability renders agents unreliable for high-stakes scientific automation. We i",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Oscillatory Phase Coding Emerges in Adaptive RNNs for Flexible Working Memory",
    "link": "https://arxiv.org/abs/2611.06932",
    "description": "arXiv:2611.06932v2 Announce Type: replace-cross Abstract: Oscillatory phase coding (OPC) is widely observed in neural systems and has been implicated in cognitive functions such as memory and sequence processing. However, its computational role and neural substrates remain largely unclear. Here, we studied OPC by training recurrent neural networks (RNNs) with adaptation to perform sequence working memory tasks with variable delays. After training, we found that OPC emerges in the RNN spontaneous",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "Archetypal contexts in the neurons of language models: an architecture for intelligence?",
    "link": "https://arxiv.org/abs/2611.07234",
    "description": "arXiv:2611.07234v2 Announce Type: replace-cross Abstract: We validate our previous hypothesis that a language model holds relational patterns apart from the subject domains that instantiate them (Nordfors, 2026). These archetypal contexts are patterns of relations that people recognize across many fields, such as the tipping point or winner takes all, held once and applied across domains. We show this inside the model, Qwen3.8-27B. One set of neurons carries the archetype, say the tipping point;",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.AI",
    "category": "AI 研究"
  },
  {
    "title": "FasterRW: An Efficient Prior-Assisted Random Walk Solver for Thermal Analysis",
    "link": "https://arxiv.org/abs/2611.08490",
    "description": "arXiv:2611.08490v1 Announce Type: new Abstract: Thermal simulation is becoming increasingly critical in modern IC design and manufacturing. Feynman--Kac random walk methods can estimate localized temperatures without solving the global field, but in practical settings without Dirichlet boundaries they require very long paths to control the truncation residual. This paper presents FasterRW, a continuation-value framework for accelerating Feynman--Kac thermal random walks. We prove a stopping-time",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Embedding Consistent Recurrent Neural Networks in Finite Element Simulations for Path-Dependent Damage Prediction",
    "link": "https://arxiv.org/abs/2611.08494",
    "description": "arXiv:2611.08494v1 Announce Type: new Abstract: Capturing sheet-metal localisation physics with a trained surrogate inside a finite element (FEM) solver requires the surrogate to deliver consistent predictions irrespective of the solver's strain-increment count, which is difficult to control in non-linear explicit codes. We address this by re-implementing a trained recurrent neural network (RNN) damage criterion in Fortran and embed it as a live, increment-by-increment fracture criterion inside ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Rethinking Data Selection as Distribution Matching on Semantic Manifolds",
    "link": "https://arxiv.org/abs/2611.08495",
    "description": "arXiv:2611.08495v1 Announce Type: new Abstract: Instruction tuning of large language models and large vision language models relies on massive training data, which incurs substantial computational and storage costs. Meanwhile, training data often contains redundancy, noise, and low quality samples. Existing data selection methods mostly rely on diversity, importance, or a combination of both, without explicitly constraining the distributional consistency between the selected subset and the full ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Generative Reconstruction of Full-Field Sensor States for Safety-Critical Digital Twins",
    "link": "https://arxiv.org/abs/2611.08499",
    "description": "arXiv:2611.08499v1 Announce Type: new Abstract: Accurate reconstruction of incomplete sensor fields is critical for state awareness in safety-critical digital twins (DTs). Thermocouples in high-temperature and radiation environments may drift, fail, or become intermittently unavailable, causing partial observability. This study develops a sparse-sensor reconstruction framework for Oregon State University's High Temperature Test Facility (HTTF) and evaluates six methods under intra- and inter-exp",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Adaptive Depth Aggregation in Graph Transformers for Long-Range Graph Reasoning",
    "link": "https://arxiv.org/abs/2611.08500",
    "description": "arXiv:2611.08500v1 Announce Type: new Abstract: Graph Transformers improve long-range node-to-node communication through global or structure-aware interactions. However, improving cross-node communication does not determine how computations produced at different depths should be combined. Standard residual streams accumulate successive computations with fixed unit coefficients shared across nodes. This fixed aggregation is a residual-interface constraint: once intermediate contributions have bee",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Emergent Low-Dimensional Topological Dynamics Dictate Generalization and Escape Mechanics in Billion-Parameter Neural Networks",
    "link": "https://arxiv.org/abs/2611.08502",
    "description": "arXiv:2611.08502v1 Announce Type: new Abstract: The remarkable generalization of modern over-parameterized neural networks defies classical statistical learning bounds. Here we establish that optimization trajectories in billion-parameter models do not sample the ambient dimension $\\mathbb{R}^N$ homogeneously; instead, they are dynamically constrained to a low-dimensional execution submanifold $\\mathcal{M}_{\\text{exec}}$ (with empirically observed effective dimension $d_{\\text{eff}} \\le 12$). By",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Does Country Matter? Evaluating Geographic Sensitivity of Large Language Models in Zero-Shot Chronic Kidney Disease Screening",
    "link": "https://arxiv.org/abs/2611.08507",
    "description": "arXiv:2611.08507v1 Announce Type: new Abstract: Large language models (LLMs) show strong zero-shot reasoning capabilities, yet their sensitivity to prompt context raises questions about reliability in deployment. This study investigates whether geographic context embedded in prompts influences LLM-based chronic kidney disease (CKD) screening, independent of any change in patient features. Using a community-based CKD dataset from Bangladesh (284 participants with 112 CKD and 172 non-CKD), we syst",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Interpretable Multifidelity Learning with Kolmogorov-Arnold Networks for Spatiotemporal Nuclear Reactor Flow Modeling",
    "link": "https://arxiv.org/abs/2611.08512",
    "description": "arXiv:2611.08512v1 Announce Type: new Abstract: High-fidelity computational fluid dynamics (CFD) simulations of nuclear reactor systems are computationally expensive, motivating machine learning methods that reduce cost while preserving accuracy. Multifidelity surrogate modeling addresses this by combining inexpensive low-fidelity data with limited high-fidelity data. This work investigates whether the high-fidelity data required to predict the spatiotemporal mass flow rate across all 193 fuel a",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "What Are LLM Agents Actually Learning on Low-Budget Molecular Optimization Benchmarks?",
    "link": "https://arxiv.org/abs/2611.08522",
    "description": "arXiv:2611.08522v1 Announce Type: new Abstract: Recent work reports large gains for LLM agents on low-budget molecular optimization. We measure the contributions of online optimization, retrievable task information, and permissive oracle landscapes. On PMO at 50 oracle calls, a GPT-4o mini agent's sum AUC falls from 14.44 to 4.85 after task names and curated reference compounds are hidden. An identity-blinded condition that states only the oracle form (e.g., similarity to a hidden reference) sco",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Evolutionary Adaptive Metric Learning: A Multi-Objective Framework for Learning Local Distance Functions in Nearest Neighbor Classification",
    "link": "https://arxiv.org/abs/2611.08549",
    "description": "arXiv:2611.08549v1 Announce Type: new Abstract: Nearest neighbour classifiers inherit the geometry of their distance function. Fixed distances and globally learned metrics apply the same geometry throughout the input space, although relevant feature directions may vary across regions. We propose EAML (Evolutionary Adaptive Metric Learning), a framework that learns instance-dependent positive-definite metrics through a low-dimensional parameterization. Each local metric combines an input-dependen",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "How Small Can We Go? Calibrating Activation-Cache Compression for SAE Training",
    "link": "https://arxiv.org/abs/2611.08551",
    "description": "arXiv:2611.08551v1 Announce Type: new Abstract: To train a sparse autoencoder (SAE), you need a massive cache of model activations. We look into the effects that compression has on an SAE in two ways: we keep the original fp32-trained SAE and pass the compressed cache into the same SAE to see how many feature activations stay the same (the frozen-SAE test), and we retrain an SAE on the compressed cache and see how many of the original features still exist (the retraining test). We found that in ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Minimum-Sufficient Knowledge and Computation for Wind Energy Predictive Analysis",
    "link": "https://arxiv.org/abs/2611.08558",
    "description": "arXiv:2611.08558v1 Announce Type: new Abstract: Resource-constrained cyber-physical decision systems often apply fixed sensing, knowledge, and computational pipelines despite state-dependent information needs. We introduce Minimum-Sufficient Knowledge and Computation (MSKC), a resource-aware computing principle: select the least-costly route meeting decision-risk and deployment constraints, escalating only when cheaper routes are insufficient. As proof of concept, we isolate adaptive knowledge r",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Not All Misalignment Is Alike: A Decomposed Benchmark for Emergent Misalignment",
    "link": "https://arxiv.org/abs/2611.08569",
    "description": "arXiv:2611.08569v1 Announce Type: new Abstract: Emergent misalignment (EM), in which fine-tuning on a narrow task induces misaligned behaviour on unrelated prompts, has been demonstrated across a wide range of datasets, model families, and training setups. Yet, most studies continue to rely on the evaluation approach introduced in the original EM paper, producing rates that are sensitive to the small set of evaluation questions used, the choice of judge, and the thresholds applied. These evaluat",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Benchmarking Machine Learning for Chaotic Three-Body Dynamics in Astrophysics",
    "link": "https://arxiv.org/abs/2611.08634",
    "description": "arXiv:2611.08634v1 Announce Type: new Abstract: Machine learning (ML) and generative AI have recently made impressive progress in understanding physics. We explore a hierarchy of prediction problems stemming from chaotic three-body systems and benchmark existing ML approaches, including general-purpose prediction algorithms and those that build on top of foundational physics models. We first simulate the trajectories of triple systems near the critical boundary of stable/unstable initial conditi",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Higher Order Component Attribution via Learned Surrogates in High Energy Physics",
    "link": "https://arxiv.org/abs/2611.08656",
    "description": "arXiv:2611.08656v1 Announce Type: new Abstract: Experimental High Energy Physics (HEP) has adopted the transformer architecture for identification of jets, particularly the state-of-the-art Particle Transformer (ParT) which injects explicit information about particle correlations into the attention mechanism. While able to achieve state-of-the-art results in accuracy, interpretability to its effectiveness has been limited. In this paper we propose component attribution methods using Kolmogorov-A",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Does a Trading Policy Need to Know What It Trades? Microstructure Invariance and Zero-Shot Transfer of Execution Policies",
    "link": "https://arxiv.org/abs/2611.08701",
    "description": "arXiv:2611.08701v1 Announce Type: new Abstract: Execution algorithms are calibrated asset by asset, because the queues, trade rates and bid-ask spreads they face differ by orders of magnitude across assets. For reinforcement learning this is zero-shot generalisation across contexts of very different scales, and microstructure invariance proposes a normalisation fixed by theory: measured in each asset's own units of time, size and price, markets look alike. In an exact order-by-order replay of pu",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Foundation-Model Residuals as Signals of Urban Bus Irregularity",
    "link": "https://arxiv.org/abs/2611.08703",
    "description": "arXiv:2611.08703v1 Announce Type: new Abstract: Pretrained trajectory models encode mobility patterns learned across cities, but their errors when transferred to a new city are usually treated only as performance limitations. We instead ask whether these residuals reveal systematic local conditions. Architectures such as UniTraj and TrajFM learn transferable trajectory representations, although cross-context transfer remains challenging. Using the NetMob26 bus location, ticketing, weather, netwo",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "On Differentially Private Mechanisms for Linear Regression",
    "link": "https://arxiv.org/abs/2611.08737",
    "description": "arXiv:2611.08737v1 Announce Type: new Abstract: We study the classic least-squares linear regression problem under differential privacy (DP) in the batch and the continual observation setting. In the latter setting, the mechanism receives a stream of $n$ data points $(x_i,y_i)$ ($x_i\\in\\mathbb{R}^d$ and $y_i\\in\\mathbb{R}$) and must output an estimate of the optimal parameters at each time step $i$. Although differentially private linear regression has been extensively studied in the batch settin",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "MEDALLION: Manifold Embedding Distillation and Attributions for Low-dimensional Latent InterpretatiON",
    "link": "https://arxiv.org/abs/2611.08767",
    "description": "arXiv:2611.08767v1 Announce Type: new Abstract: Dimensionality reduction is widely used to visualize high-dimensional data and guide scientific discovery, yet interpreting which original features contribute to low-dimensional representations remains challenging, particularly for black-box methods such as t-SNE and UMAP. We introduce \\textbf{MEDALLION} (Manifold Embedding Distillation and Attributions for Low-dimensional Latent InterpretatiON), a novel framework for interpreting low-dimensional e",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "TopoSHAP: Shapley for Explainable and Efficient Topological Deep Learning",
    "link": "https://arxiv.org/abs/2611.08789",
    "description": "arXiv:2611.08789v1 Announce Type: new Abstract: Topological deep learning (TDL) extends learning on graphs, such as molecules or social networks, to higher-order structures, such as rings in a molecule or groups in a social network. Explaining which of these structures drive a model's predictions, and which architectural components matter most for its performance, remains challenging. We introduce TopoSHAP, an efficient and general explanation framework that addresses both questions across topol",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "MotionBench-XAI: Benchmarking What Shapes Shapley Explanations in Spatiotemporal Machine Learning",
    "link": "https://arxiv.org/abs/2611.08797",
    "description": "arXiv:2611.08797v1 Announce Type: new Abstract: Predicting outcomes from spatiotemporal data, such as assessing Parkinson's severity from human motion, often requires explainability in addition to accuracy. Practitioners need to know what drove the prediction, whether it be spatial (a body joint), temporal (a specific window), or both. Shapley values are attributions computed by treating input features as players in a cooperative game and measuring how the model output changes as coalitions of p",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "On the Few-Shot Adaptation of Vision-Language Models: A Few Gradient Signs Are All You Need",
    "link": "https://arxiv.org/abs/2611.08800",
    "description": "arXiv:2611.08800v1 Announce Type: new Abstract: The limited supervision available for the few-shot adaptation of vision-language models makes gradient estimation particularly noisy. We find that the gradient magnitudes are severely miscalibrated, while the signs of a small top-magnitude subset remain informative. This motivates SignSparseSGD and DynSignSparseSGD, two state-free optimizers that use gradient magnitudes only to select where to update and fixed-magnitude signs to decide how to updat",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Global Solar Siting from Geospatial Embeddings",
    "link": "https://arxiv.org/abs/2611.08831",
    "description": "arXiv:2611.08831v1 Announce Type: new Abstract: Global solar photovoltaic (PV) capacity is rapidly growing, helping decrease our emissions and dependence on fossil fuels. However, optimally siting a solar plant remains challenging, requiring anticipation of geographical, urban, and infrastructure needs. Current methods rely on multi-criteria decision analysis (MCDA) using hand-picked geophysical layers and solar-resource products, however these strategies are not geographically transferable and ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Reconstructing LLM Lineage Trees via Fine-Tuning Path Inference",
    "link": "https://arxiv.org/abs/2611.08866",
    "description": "arXiv:2611.08866v1 Announce Type: new Abstract: Fine-tuned (FT) derivatives of large language models (LLMs) are now released in large numbers, yet their provenance relies on self-reports and cannot be verified. Misattributed lineage leaves a verifier unable to audit outsourced fine-tuning, confirm license compliance of derived models, or trace vulnerabilities that a parent passes to its children. All three require the direction of derivation, not merely its presence. Existing output-only methods",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Learning to Restart: Differentiable Restart Policies for Optimization Dynamics",
    "link": "https://arxiv.org/abs/2611.08883",
    "description": "arXiv:2611.08883v1 Announce Type: new Abstract: Adaptive restart mechanisms, which reset the momentum or other auxiliary state of an iterative optimizer, play a central role in the empirical performance of accelerated first-order methods, yet existing restart rules remain almost entirely hand-designed. The obstruction to learning restart policies is that, unlike the typical Learning to Optimize (L2O) setting, the discrete restart events make the resulting trajectory non-differentiable in the alg",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "SSF-Net: A Spatial-Spectral Fusion Network for Accurate PDE Operator Learning",
    "link": "https://arxiv.org/abs/2611.08912",
    "description": "arXiv:2611.08912v1 Announce Type: new Abstract: Machine learning methods for solving partial differential equations (PDEs) significantly improve computational efficiency over traditional numerical solvers such as finite element method (FEM). However, PDE dynamics inherently span both local and global dynamics: disturbances propagate and decay gradually through the domain, while global coupling effects can influence the whole system simultaneously. Capturing both types of dynamics with a low comp",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Composable Causality: A Toolkit for Systematic Time-Series Causal Discovery and Treatment-Effect Benchmarking",
    "link": "https://arxiv.org/abs/2611.08918",
    "description": "arXiv:2611.08918v1 Announce Type: new Abstract: Real-world multivariate time series rarely come with verified ground-truth causal structure, so research on time-series causal discovery and treatment-effect estimation depends on synthetic data. Existing tools are either fixed datasets that cannot be modified after release or script-based generators in which each script fixes one combination of mechanism, confounding, and missingness. Neither supports controlled experiments that vary a single prop",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "ResQAdam: Residual-Preserving Adaptive Optimization for Memory-Efficient Quantization Aware Training",
    "link": "https://arxiv.org/abs/2611.08924",
    "description": "arXiv:2611.08924v1 Announce Type: new Abstract: Quantization-aware training (QAT) is the most reliable way to obtain accurate low-bit large language models (LLMs), but training with AdamW keeps two dense FP32 states for every weight matrix. We find that low-rank memory-efficient optimizers such as GaLore and LDAdam degrade substantially in QAT. A considerable part of the QAT momentum lies outside its top-r singular subspace, and projection-based methods discard this part at every step. We furthe",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Surrogate Quality Score: A Novel Composite Performance Metric for Model Selection",
    "link": "https://arxiv.org/abs/2611.08937",
    "description": "arXiv:2611.08937v1 Announce Type: new Abstract: The growing reliance on high-fidelity, state-of-the-art machine learning based models for engineering decision-making necessitates robust and systematic approaches for model selection. While high predictive accuracy at untrained points is a necessary trait in the final model, other attributes such as model complexity, forecastability, explainability, scalability, and physics-awareness may be equally important or relevant criteria depending on appli",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Accuracy Is Not Value: Choosing Weak Supervisors by What the Student Inherits",
    "link": "https://arxiv.org/abs/2611.08959",
    "description": "arXiv:2611.08959v1 Announce Type: new Abstract: Weak supervisors are usually judged by their own errors, but what matters is what a student learns from them. For squared loss and any linear learner shared by all supervisors, we show that a supervisor's value is determined by its errors after they pass through the student's learning operator. Consequently, the inner products of the supervisors' raw errors can be compatible with every feasible value of the student's risk, and weighting supervisors",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Energy-Based Reasoners: Your Recurrent Reasoner Should Be an Energy-Based Model",
    "link": "https://arxiv.org/abs/2611.08977",
    "description": "arXiv:2611.08977v1 Announce Type: new Abstract: Looping is a powerful inductive bias for reasoning. By repeatedly iterating a recurrent block, looped models can scale their effective depth and enable multi-step reasoning in latent space. However, existing looped models are not inherently guided by an explicit measure of progress, making it difficult to determine when to stop looping and how to improve upon the current state. To enable this, we introduce Energy-Based Reasoners (EBRs), which learn",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Action-Centered Causal Bandits for Budget-Constrained Promotion Targeting",
    "link": "https://arxiv.org/abs/2611.08990",
    "description": "arXiv:2611.08990v1 Announce Type: new Abstract: Web platforms select among costly interventions for each user to maximize incremental outcomes under a global budget. We formulate this problem as a budget-constrained contextual bandit with heterogeneous treatment effects. Although an action-independent outcome baseline cancels from treatment comparisons, modeling a nonlinear baseline can increase statistical complexity. We propose DR-CATE-CBwK, an action-centered causal bandit that directly learn",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Enforcing Symmetries on Pre-trained ML Models for Physics",
    "link": "https://arxiv.org/abs/2611.08992",
    "description": "arXiv:2611.08992v1 Announce Type: new Abstract: Post-hoc group averaging (or test-time augmentation) is a simple way to impose symmetry on a trained predictor without changing its architecture or retraining it. For finite and compact groups, averaging over a normalized Haar measure on the group gives the Reynolds operator: a canonical projection onto invariant or equivariant predictors with known non-increasing risk guarantees under certain assumptions. This paper provides numerical experiments ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "When2What: A Timing-Conditioned Framework for Long-Horizon Forecasting of Continuous Cardiovascular Waveforms",
    "link": "https://arxiv.org/abs/2611.08993",
    "description": "arXiv:2611.08993v1 Announce Type: new Abstract: Long-horizon forecasting of quasi-periodic cardiovascular waveforms, such as the electrocardiogram (ECG), arterial blood pressure (ABP), and photoplethysmogram (PPG), requires predicting both when future cardiac events will occur (beat timing) and what the local structural pattern looks like around each event (beat morphology). However, standard sequence forecasters trained with pointwise mean squared error (MSE) average across uncertain future hea",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Calibrating your confidence requires thinking of all the ways you could be wrong",
    "link": "https://arxiv.org/abs/2611.08997",
    "description": "arXiv:2611.08997v1 Announce Type: new Abstract: A primary limitation of modern deep learning is the miscalibration of model confidence; traditional architectures fundamentally lack a mechanism to quantify their own uncertainty. Larger models and larger datasets mitigate this issue, but they do not resolve the underlying structural deficiency. Bayesian methods offer a principled uncertainty-aware learning framework through stochastic parameters. Yet, despite the established benefits, the inherent",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Towards Robust Reinforcement Learning Market Making: Lessons from Loss Function Experimentation",
    "link": "https://arxiv.org/abs/2611.09012",
    "description": "arXiv:2611.09012v1 Announce Type: new Abstract: Market makers play a vital role in ensuring efficient trade within financial markets. Recent literature has delved into training market-making systems using reinforcement learning. This paper delves into the impact of various loss function formulations on risk management behavior within reinforcement-based market making. Through empirical evaluation, we contrast profit-maximizing strategies with risk-averse approaches, finding that penalties for in",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "KnowEvo: Knowledge Evolution for Protein Optimization",
    "link": "https://arxiv.org/abs/2611.09013",
    "description": "arXiv:2611.09013v1 Announce Type: new Abstract: Large language models (LLMs) have shown promise in scientific discovery, yet systematically accumulating and refining reusable scientific knowledge remains challenging. Existing approaches primarily improve LLM-based problem solving through parameter optimization or feedback-driven refinement of prompts, programs, and solution trajectories, leaving acquired expertise either embedded in model weights or scattered across iterative problem-solving pro",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Knowledge Distillation from Neural Networks to Differentiable Logic Networks",
    "link": "https://arxiv.org/abs/2611.09024",
    "description": "arXiv:2611.09024v1 Announce Type: new Abstract: Differentiable logic networks (DLNs) are interpretable, edge-friendly classifiers that learn both their logic operators and their connections through gradient descent, achieving accuracy competitive with multi-layer perceptrons at orders-of-magnitude lower inference cost. Their accuracy, however, is bounded by the problems of vanishing gradients, scalability, and lack of an ecosystem, leaving a gap relative to conventional neural networks on severa",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Function-Space Certification for Neural Operators",
    "link": "https://arxiv.org/abs/2611.09038",
    "description": "arXiv:2611.09038v1 Announce Type: new Abstract: Certifying the robustness and physical consistency of scientific machine-learning models ensures that their predictions remain reliable beyond the test set. For neural operators, which learn PDE solution operators by mapping infinite-dimensional function spaces, certification means establishing rigorous, domain-wide guarantees for their output functions. However, standard neural network (NN) verification methods are fundamentally designed for vecto",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "When Can You Trust Neural Critics? Auditing Mutual Information Estimates of Higher-Order Epistasis in Protein Language Models",
    "link": "https://arxiv.org/abs/2611.09046",
    "description": "arXiv:2611.09046v1 Announce Type: new Abstract: Mutual information (MI) estimation is used to probe what neural representations encode, including in protein language models, but variational MI estimators have variance that scales at least exponentially in the true MI. We audit a prior neural-MI study of order-resolved epistasis in ESM-2 on the four-site GB1 landscape. Run-to-run differences show no systematic bias and a magnitude comparable to ordinary cross-seed retraining variability, and the ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "LeanDojo-v2: A Comprehensive Library for AI-Assisted Theorem Proving in Lean",
    "link": "https://arxiv.org/abs/2611.09048",
    "description": "arXiv:2611.09048v1 Announce Type: new Abstract: Building on recent progress in machine learning for formal theorem proving in Lean, we introduce LeanDojo-v2: an end-to-end framework that unifies repository data extraction, LLM fine-tuning, proof search, AI autocompletion, and LLM-assisted theorem proving in a single software library. In addition, we provide Lean4Code, a lightweight IDE that integrates the various features of LeanDojo-v2 through a simple, mathematician-friendly UI. These tools wi",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "StreamTab: Training-Free Temporal Link Prediction with Tabular Foundation Models",
    "link": "https://arxiv.org/abs/2611.09052",
    "description": "arXiv:2611.09052v1 Announce Type: new Abstract: Temporal link prediction uses past interactions to predict whether two nodes will interact in the future. Temporal graph neural networks achieve strong results on this task, but they are trained separately for each graph. How a model should use interaction history also depends on the candidates it is compared with. A past interaction can distinguish a recurring link from a random pair that has never interacted, but when the negative candidates have",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "WearableBridge: Task-Guided Latent Transport for Free-Living Activity Recognition",
    "link": "https://arxiv.org/abs/2611.09067",
    "description": "arXiv:2611.09067v1 Announce Type: new Abstract: Wrist-worn accelerometers make activity monitoring feasible at scale, but incidental arm motion, device orientation, and shifting context blur the signal that separates activities. Calibration studies supply higher-quality references such as concurrent thigh recordings or supervised laboratory wrist sessions, but they are expensive, cover few participants, and are rarely available at deployment. How can limited reference data improve recognition fo",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "BrainCoT: A Multi-Task Zero-Shot Brain Signal Foundation Model with Neurometric-Anchored Chain-of-Thought Reasoning",
    "link": "https://arxiv.org/abs/2611.09082",
    "description": "arXiv:2611.09082v1 Announce Type: new Abstract: Brain signals exhibit substantial multi-center heterogeneity, strong inter-subject variability, and highly diverse task settings, which makes it difficult to build models that generalize beyond a single task. While recent brain signal foundation models leverage large-scale pretraining to learn generalizable representations, they often fall short in practice because they still require target-data-specific supervised adaptation, lack multi-task zero-",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "TUGB: A Two-stage Uncertainty-aware Generative Auto-Bidding Framework",
    "link": "https://arxiv.org/abs/2611.09091",
    "description": "arXiv:2611.09091v1 Announce Type: new Abstract: Generative modeling, particularly Decision Transformers, shows promise in auto-bidding strategies. However, it struggles with limited exploration in static offline datasets, vulnerability to dynamic environmental shifts, and a reliance on heuristic return-to-go (RTG) specifications that may yield suboptimal performance on unseen traffic. To address these challenges, we propose the Two-stage Uncertainty-aware Generative Auto-Bidding (TUGB) framework",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "COMBIO: Automated Discovery of a Compact Composite Biomarker from Routine Laboratory Panels",
    "link": "https://arxiv.org/abs/2611.09102",
    "description": "arXiv:2611.09102v1 Announce Type: new Abstract: Machine-learning models based on routine laboratory panels can predict outcomes but can be difficult to interpret and operationalize. We present COMBIO, an automated pipeline that distils such a model into a compact closed-form biomarker. The composite is a product of laboratory measurements raised to integer powers from minus two to two. The sign of each exponent indicates whether higher values of the corresponding measurement increase or decrease",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Deep Learning Theory through the Lens of Statistical Physics: A Topical Review",
    "link": "https://arxiv.org/abs/2611.09138",
    "description": "arXiv:2611.09138v1 Announce Type: new Abstract: The recent success of foundation models and deep learning has far outpaced our theoretical understanding of how large-scale neural networks learn and generalize. Statistical physics provides a natural language for describing such high-dimensional, nonlinear, and strongly coupled systems, offering concepts such as mean-field theory, phase transitions, energy landscapes, and stochastic dynamics. In this topical review, we adopt a statistical-physics ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Augmentron: Scalable Multi-View Visual Augmentation for Robot Learning",
    "link": "https://arxiv.org/abs/2611.09145",
    "description": "arXiv:2611.09145v1 Announce Type: new Abstract: Robot policies trained on visually narrow demonstrations can become sensitive to environmental features that are unrelated to the task. Existing generative augmentation methods can introduce visual diversity, but processing every frame and camera view independently is computationally expensive and may produce inconsistent observations across cameras and timestamps. We introduce Augmentron, a geometry-aware pipeline that generates reusable scene rep",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Beyond the Grid: Continuous Dictionary Pursuit for Interpretable Signal Decomposition",
    "link": "https://arxiv.org/abs/2611.09163",
    "description": "arXiv:2611.09163v1 Announce Type: new Abstract: Deep learning models achieve high accuracy in signal processing but remain difficult to interpret. Classical matching pursuit and sparse coding offer better transparency but suffer from spectral leakage and grid mismatch when signal frequencies do not align with discrete dictionary atoms. We introduce Continuous Dictionary Pursuit (CDP), a framework for interpretable signal decomposition that learns the parameters of closed-form functions directly ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "TOFS: Feature Selection with Swap Supervision for Semantic Communication over Fading Channels",
    "link": "https://arxiv.org/abs/2611.09173",
    "description": "arXiv:2611.09173v1 Announce Type: new Abstract: Task-oriented semantic communication transmits task-relevant features to support receiver inference under limited communication resources and adverse channel conditions. For image classification, the usefulness of a feature depends on the other transmitted features and the distortion introduced by the wireless channel. Effective feature prioritization should therefore account for classification performance after transmission of the selected feature",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "A Taxonomy-Driven Synthetic Dataset for Retrieval Effectiveness and Fairness Evaluation in Hiring",
    "link": "https://arxiv.org/abs/2611.09178",
    "description": "arXiv:2611.09178v1 Announce Type: new Abstract: While machine learning hiring tools are ubiquitous, the need for privacy regulations and commercial sensitivity makes public benchmarking legally complex. We address this challenge by introducing a taxonomy-driven, fully synthetic HR dataset and benchmark to simultaneously evaluate retrieval effectiveness and algorithmic fairness. Grounded in 660K real freelancer profiles, our multilingual corpus features candidate profiles, project briefs, and cou",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "RoleWalk: training-free structural embeddings for directed graphs that transfer across graphs",
    "link": "https://arxiv.org/abs/2611.09189",
    "description": "arXiv:2611.09189v1 Announce Type: new Abstract: Structural role embeddings describe a node by its position in a graph - hub, bridge, periphery, member of a dense core - rather than by who its neighbours are. Existing methods either learn coordinates specific to one graph (struc2vec, Role2Vec, RESD) or read scales and normalisations from the whole graph (GraphWave, Digraphwave), so the same neighbourhood can receive different coordinates in two graphs; few read edge directions. We present RoleWal",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Copies Are Not Confirmations: How News Duplication Fools LLM Judges and Continual Learners",
    "link": "https://arxiv.org/abs/2611.09203",
    "description": "arXiv:2611.09203v1 Announce Type: new Abstract: Many news reports of a claim are copies of one source: wire stories, content shared within a media group, syndicated features and press releases. We ask whether LLM judges and continual learners treat such copies as independent confirmations. In 200,000 English CC-News articles, a MinHash detector links 18.9% to a near-copy from another outlet (precision 0.97 once boilerplate is removed); it links 92% of edited reprints to their originals but none ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Provable State Estimation with Recurrent Models",
    "link": "https://arxiv.org/abs/2611.09217",
    "description": "arXiv:2611.09217v1 Announce Type: new Abstract: Estimating the state of a dynamical system from observations is a crucial task in robotics and control. Despite their empirical success, recurrent models often lack formal guarantees on convergence and robustness. We bridge this gap by analyzing these architectures from the perspective of nonlinear observer theory. By framing RNNs as a time-discretization of continuous latent dynamical systems (Neural ODEs), we demonstrate that enforcing a contract",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Cross-Layer TopK: Dynamically Allocating Sparsity Across Layers in Transcoders",
    "link": "https://arxiv.org/abs/2611.09233",
    "description": "arXiv:2611.09233v1 Announce Type: new Abstract: Cross-Layer Transcoders (CLTs) decompose the activations of large language models into human-interpretable features and trace how these features interact across layers to form circuits, making them a key tool for mechanistic interpretability. However, training CLTs effectively and efficiently is hard. Beyond the usual trade-off between sparsity and reconstruction quality, a CLT has to model all layers at once, which adds a further challenge. The co",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Controllable Molecule Generation via Sparse Representation Editing: An Interpretability-Driven Perspective",
    "link": "https://arxiv.org/abs/2611.09235",
    "description": "arXiv:2611.09235v1 Announce Type: new Abstract: Controllable molecule generation is crucial for diverse scientific applications, such as drug discovery and materials design. While large language models (LLMs) show great promise, their dense and entangled representations impede precise control over the generation of molecules with bespoke substructures or properties. To address this, we propose Sparse Representation Editing (SpaRE), an interpretability-driven framework for fine-grained and precis",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Practical Non-Stationary Graph Gaussian Processes",
    "link": "https://arxiv.org/abs/2611.09247",
    "description": "arXiv:2611.09247v1 Announce Type: new Abstract: Gaussian processes on graphs provide a principled framework for prediction and uncertainty estimation, but modelling heterogeneous networks often requires balancing flexibility against parameter complexity. Variability at a node may reflect useful signal that should propagate through the network, unreliable measurements whose influence should be suppressed, or a mixture of both. We introduce Variance-Coupled Gaussian Processes (VCGPs), which use a ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Topology as a Design Variable: Joint Architecture-Sizing Optimization for SRAM",
    "link": "https://arxiv.org/abs/2611.09248",
    "description": "arXiv:2611.09248v1 Announce Type: new Abstract: SRAM's power-performance-area-stability trade-off depends on bitcell topology, a discrete architectural choice that interacts non-separably with continuous transistor sizing. However, no open-source SRAM tool treats topology as an optimizable variable. OpenRAM generates SRAM layouts but performs no optimization, while OpenYield supports high-fidelity evaluation but restricts optimization to scalar sizing of a fixed 6T cell. OpenYieldV2 closes this ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Rethinking MoE Load Balancing as Feedback Control",
    "link": "https://arxiv.org/abs/2611.09252",
    "description": "arXiv:2611.09252v1 Announce Type: new Abstract: Mixture-of-Experts (MoE) training is often not stationary: the data mixture changes at curriculum boundaries, when a model is continually pretrained into a new domain, or when the corpus is refreshed. Routing is learned against the current mixture, so each such change disrupts the per-expert load the router had converged to, and existing balancing methods have only been evaluated on stationary data. We rethink load balancing as a feedback control p",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Safety-Focused Reinforcement Learning Using Risk-Sensitive Coupled Control",
    "link": "https://arxiv.org/abs/2611.09290",
    "description": "arXiv:2611.09290v1 Announce Type: new Abstract: This paper investigates the coupled control problem within safety-focused reinforcement learning, addressing the essential challenge of achieving optimal performance while ensuring safety in systems operating within complex environments. We define safety as the requirement to prevent the system from reaching undesirable or hazardous states. We propose a coupled control approach that prioritizes safety by employing effective methods to prevent the s",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Stable probabilistic emulation of partially observed dynamical systems",
    "link": "https://arxiv.org/abs/2611.09317",
    "description": "arXiv:2611.09317v1 Announce Type: new Abstract: Predicting the long-term behavior of partially observed dynamical systems such as the coupled atmosphere-ocean system is central to societal decision-making. Motivated by the success of deep learning emulators in weather forecasting, data-driven climate models represent a promising approach. However, climate emulation poses distinct challenges: models must account for unresolved fast variables introduced by unavoidable coarse-graining, reproduce lo",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "DiffusionRef-IMU: Guide-Anchored Residual Diffusion for Cross-Location Inertial Measurement Unit Translation",
    "link": "https://arxiv.org/abs/2611.09323",
    "description": "arXiv:2611.09323v1 Announce Type: new Abstract: Cross-location variation in wearable inertial measurement unit (IMU) signals complicates learning when measurements from a desired target body location are unavailable. This study proposes DiffusionRef-IMU, a two-stage cross-location translation framework in which a deterministic Direct network first estimates the target signal and a guide-anchored residual diffusion model refines only the remaining target discrepancy. The evaluation comprises five",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Probably Safe Sim-to-Real Transfer with Lifetime Validity",
    "link": "https://arxiv.org/abs/2611.09344",
    "description": "arXiv:2611.09344v1 Announce Type: new Abstract: We present Dejavu, a method that makes sim-to-real transfer of reinforcement learning policies in constrained Markov decision processes probably safe over an unbounded sequence of policy updates. An anytime valid test using per-decision importance sampling and a betting confidence sequence certifies each candidate trained in simulation before deployment using only trajectories collected by a safe baseline policy operating in production. Simulation ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Open-world Reconstruction-based Classifier with Concept Drift Adaptation",
    "link": "https://arxiv.org/abs/2611.09350",
    "description": "arXiv:2611.09350v1 Announce Type: new Abstract: Data stream processing has become central to modern machine learning applications, with concept drifts and novel class appearances posing the primary challenges faced by recognition methods. Adapting to concept drifts while also being able to detect novel classes and distinguish groups of unknown observations can be seen as a step towards effective method employment in an open-world setting. This work proposes a classification method that can detec",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Calibrated Uncertainty Quantification on TDC ADMET: What Can Be Resolved Across 22 Datasets?",
    "link": "https://arxiv.org/abs/2611.09373",
    "description": "arXiv:2611.09373v1 Announce Type: new Abstract: Absorption, distribution, metabolism, excretion, and toxicity (ADMET) models often rely on small, heterogeneous datasets, yet their predictions may determine which compounds proceed to experimental testing. Useful evaluations must therefore assess both predictive performance and the quality of reported probabilities or intervals. We ask which common uncertainty-quantification methods perform best on the 22 Therapeutics Data Commons (TDC) ADMET data",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "k-Volume: a Unified Active Learning Strategy",
    "link": "https://arxiv.org/abs/2611.09388",
    "description": "arXiv:2611.09388v1 Announce Type: new Abstract: In the classification context where revealing the label of a sample is costly, we propose a new Active Learning (AL) strategy named k-Volume (kVol). It randomly selects a sample to be labeled according to the volume of the smallest ball containing its k nearest neighbors. kVol is highly versatile: it can be applied either in the input space or in the output space, and it enjoys the desirable properties of the three main families of AL strategies: d",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Causal graph fusion across incomplete cohorts and causal steering of tabular foundation models",
    "link": "https://arxiv.org/abs/2611.09400",
    "description": "arXiv:2611.09400v1 Announce Type: new Abstract: Clinical data are split across incomplete cohorts with partially overlapping variables. Causal discovery under missing data and multi-source integration have developed separately, and tabular foundation models cannot take a causal graph without retraining. We make two contributions. First, causal graph fusion learns a partial ancestral graph on the shared variables, fuses it into each cohort's graph under temporal background knowledge and lets Mark",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Future-Informed Actor-Critic",
    "link": "https://arxiv.org/abs/2611.09417",
    "description": "arXiv:2611.09417v1 Announce Type: new Abstract: Actor-critic methods optimize a parametrized policy using a critic to estimate their policy gradient. Recent work has shown that conditioning the critic on features of future states, actions, or rewards can improve sample efficiency and even final return. However, existing methods are restricted to exogenous features (independent of actions), overlooking endogenous features (dependent on actions) that may be crucial for credit assignment. We introd",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "MINE: Entropy-coded Memory-efficient Inference for Large Language Models",
    "link": "https://arxiv.org/abs/2611.09424",
    "description": "arXiv:2611.09424v1 Announce Type: new Abstract: We present MINE (Memory-efficient INference Engine), a lossless entropy coding approach that accelerates single-stream inference of Large Language Models (LLMs), where existing lossless compression methods yield speedups only for specific data types such as \\texttt{BF16} and under additional assumptions. Single-stream decoding is strongly memory-bound, since every weight must be streamed from memory once per generated token and requests cannot be b",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Consensus-Constrained Dual-Federated Optimization with Client-Side Dynamic Weighting for Distributed Android Device Threat Defense",
    "link": "https://arxiv.org/abs/2611.09470",
    "description": "arXiv:2611.09470v1 Announce Type: new Abstract: Smartphones, smart-home hubs, and wearables are increasingly exposed to sophisticated Android malware, while centralized threat-detection pipelines raise privacy and scalability concerns. Federated learning (FL) enables collaborative model training without collecting raw client data, but partial participation and variation in local model quality can destabilize global optimization. In this article, we propose DW-FedADMM, a federated optimization fr",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "TimeOmni-Live: Continuous & Live Time Series Understanding with Long-Term Memory",
    "link": "https://arxiv.org/abs/2611.09502",
    "description": "arXiv:2611.09502v1 Announce Type: new Abstract: Existing time series language models predominantly follow an offline, one-shot paradigm: they process fixed-length inputs independently and do not retain past states. This static approach fundamentally misaligns with the continuous nature of real-world streaming applications and fails to maintain the historical context necessary for cross-window reasoning. To bridge this gap, we introduce Continuous & Live Time Series Understanding (CL-TSU), a nove",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Marginal-Nonuniform Multiclass Learning",
    "link": "https://arxiv.org/abs/2611.09543",
    "description": "arXiv:2611.09543v1 Announce Type: new Abstract: We study the problem of multiclass classification within the framework of marginal-nonuniform learning, where the constants in the learning rate may depend on the unknown marginal distribution generating the unlabeled data, but not on the target concept. This notion naturally lies between classical PAC learning, where the constants are independent of both the marginal distribution and the target concept, and more recent universal learning, where th",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Solver-Free Decision-Focused Learning via Neural Optimization Layers for Edge Selection",
    "link": "https://arxiv.org/abs/2611.09560",
    "description": "arXiv:2611.09560v1 Announce Type: new Abstract: Decision-focused learning trains prediction models to improve downstream decisions, but many methods require costly solver calls or optimal-solution labels. We propose a solver-free decision-focused learning framework for NP-hard edge-selection problems with uncertain parameters in the objective, the constraints, or both. A neural optimization layer is first trained without solution labels, using problem objectives and constraint penalties. Graph-i",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Coordinatewise Epsilon for Adam under Heavy-Tailed Noise",
    "link": "https://arxiv.org/abs/2611.09596",
    "description": "arXiv:2611.09596v1 Announce Type: new Abstract: Adam estimates second moments coordinatewise, but typically adds the same scalar $\\varepsilon$ to every denominator. We study how this shared $\\varepsilon$ affects convergence when noise and curvature vary across coordinates. Under coordinatewise finite-$p$ noise moments, $p\\in(1,2]$, choosing $\\varepsilon_i$ from the noise and curvature bounds for each coordinate attains the heavy-tailed $\\ell_1$-stationarity benchmark $O(T^{-\\frac{p-1}{3p-2}})$, ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Transformer-FSQ: Discrete Latents for Extreme KV-Cache Compression",
    "link": "https://arxiv.org/abs/2611.09598",
    "description": "arXiv:2611.09598v1 Announce Type: new Abstract: Private, personalised language models must run on local consumer devices, where large, frontier models cannot fit, and retaining long contexts is non-trivial. Sequential memory---the key-value (KV) cache---grows linearly with context length, quickly dwarfing the model itself: for Qwen3-1.7B-Base, 200,000 retained entries require 21 GiB, 6.6 times more than the model weights. Yet the KV-cache compression methods we measured fail beyond moderate comp",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Know What You Need: Efficient Activation Checkpointing",
    "link": "https://arxiv.org/abs/2611.09614",
    "description": "arXiv:2611.09614v1 Announce Type: new Abstract: Large Language Model training is increasingly constrained by memory capacity. Activation Checkpointing reduces activation memory by avoiding storing selected activations during the forward pass and rematerializing them during backpropagation, thereby trading memory savings for additional computation. Although this technique is essential for scaling model training, rematerialization can be prohibitively expensive, particularly for Transformer linear",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "BiLoGo: Reducing the smoothing of localised responses in Transformer-based neural operators for sheet forming",
    "link": "https://arxiv.org/abs/2611.09621",
    "description": "arXiv:2611.09621v1 Announce Type: new Abstract: Trial-and-error FE simulation of sheet forming could be computationally expensive, neural-network-based learned simulators are used to accelerate design. These simulators should accurately capture localised responses, such as thinning around sharp radii or near ribs, which determine formability. Transformer-based neural operators propagate information efficiently across the mesh but tend to smooth such localised responses. This study develops BiLoG",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Online Causal Configuration for Networked Systems via Doubly Robust Steady-State Learning",
    "link": "https://arxiv.org/abs/2611.09665",
    "description": "arXiv:2611.09665v1 Announce Type: new Abstract: Measurement exploration reveals how interacting local controllers behave but can alter the steady-state regime a network operator seeks to optimize. Exploratory rewards may therefore fail to identify a configuration's no-exploration value: under full exploration, identical logged distributions can conceal different target values. Identification requires accounting for both action-law mismatch and shifts in the steady-state context distribution. We ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "The Multiscale Single-Index Model: An MSE Analysis of Online SGD Dynamics",
    "link": "https://arxiv.org/abs/2611.09682",
    "description": "arXiv:2611.09682v1 Announce Type: new Abstract: We consider the Multiscale Single-Index Model (MSIM), first introduced by Oymak and Soltanolkotabi (2021), as a stylized model for hierarchical feature learning with scale separation. Each layer extracts a shared single-index feature at one physical scale and passes it to the next, giving a tractable setting in which to study how deep architectures learn local multiscale representations. Under non-degeneracy and delocalization assumptions on the li",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "RidgeFill: Training-Free Late-Layer Cache Fill for Faster Prefill",
    "link": "https://arxiv.org/abs/2611.09709",
    "description": "arXiv:2611.09709v1 Announce Type: new Abstract: RidgeFill shortens prefill by not computing most of a model's upper layers for the prompt. The lower layers run exactly up to a split; from the split layer's state a per-layer map predicts every later layer's input, and each late layer writes its cache from that prediction. The design follows YOCO and DeepSeek-V4.1-Flash, where the projection is trained into the model. RidgeFill retrofits it onto models that were never trained for it: the map is a ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Fixed-point acceleration on Neural Wasserstein manifolds",
    "link": "https://arxiv.org/abs/2611.09723",
    "description": "arXiv:2611.09723v1 Announce Type: new Abstract: We propose a fixed-point acceleration method for optimization over probability measures, applicable to a variety of machine learning problems. We represent probability measures as pushforwards of a reference distribution through a neural network map and equip the parameter space with the induced pullback Wasserstein metric. This geometric structure allows natural gradient descent to be interpreted as a fixed-point iteration on a Riemannian manifold",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "One Run Is Not Enough: A Monte Carlo Protocol for Evaluating LLM Reliability on Data Science Tasks",
    "link": "https://arxiv.org/abs/2611.09729",
    "description": "arXiv:2611.09729v1 Announce Type: new Abstract: Large language models (LLMs) have shown promise for automating data science workflows. Benchmarks such as DataSciBench (2026) and StatQA (2024) have advanced the evaluation of their capabilities across data science and statistical tasks. Assessing their reliability requires examining both the quality of their responses and their consistency across repeated runs, task types, and difficulty levels. With this aim, we introduce DS-QA, a benchmark compr",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Diffusion-free Score Matching for Exact Conditional Sampling",
    "link": "https://arxiv.org/abs/2611.09758",
    "description": "arXiv:2611.09758v1 Announce Type: new Abstract: The success of modern score-based generative models is largely driven by diffusion-based training, which learns a collection of time-indexed score fields corresponding to progressively noisier versions of the data distribution. While such models achieve impressive sample quality, leveraging them for sound probabilistic inference---particularly sampling from arbitrary conditionals of the model---remains challenging. This difficulty arises because co",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "A Tight Hierarchy for Chain of Thought",
    "link": "https://arxiv.org/abs/2611.09759",
    "description": "arXiv:2611.09759v1 Announce Type: new Abstract: Chain-of-thought (CoT) reasoning has emerged as a powerful paradigm for extending the computational capabilities of transformer-based models. A growing body of recent work has begun to uncover the fine-grained computational power of transformers augmented with CoT, as well as their connections to classical complexity theory. In this work, we advance this line of research by establishing the first hierarchy theorem for CoT-based computation. Our mai",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "From PAC bounds on the generalization error to PAC bounds on the parameter estimation error",
    "link": "https://arxiv.org/abs/2611.09767",
    "description": "arXiv:2611.09767v1 Announce Type: new Abstract: Probably Approximately Correct (PAC) bounds on the generalization error (the difference between the empirical prediction error computed on the training data and its expectation) are an established tool in statistical machine learning, and there have been several extensions of these bounds to dynamical systems. In parallel, in recent years, there has been growing interest in finite-sample bounds for parameter estimation error in system identificatio",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Quasipolynomial-Time Planning for Decodable POMDPs",
    "link": "https://arxiv.org/abs/2611.09778",
    "description": "arXiv:2611.09778v1 Announce Type: new Abstract: We study planning for finite-horizon partially observable Markov decision processes (POMDPs) with finite state, action, and observation spaces. Both exact and approximate planning are known to be computationally hard in this setting, so prior work has explored natural assumptions that make planning easier. Recent work [Golowich et al., 2022] gave quasipolynomial-time approximate planning algorithms for observable POMDPs. These are POMDPs whose obse",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "The Cost of Coverage: Conformalising Native Forecast Uncertainty for GB Wind Power",
    "link": "https://arxiv.org/abs/2611.09815",
    "description": "arXiv:2611.09815v1 Announce Type: new Abstract: Uncertainty bands on wind forecasts help inform reserve sizing and commitments, but often fail to deliver their stated coverage. We apply conformal prediction to native bands to see what it adds and what it costs, comparing six forecasters, from ARIMA to a tabular foundation model, at two wind farms in Great Britain (GB) under operational conditions. We show that calibration repairs empirical marginal coverage with little or no Winkler Score penalt",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Designing Effective Monitor-Based Interventions for Mitigating Reward Hacking During RL",
    "link": "https://arxiv.org/abs/2611.09828",
    "description": "arXiv:2611.09828v1 Announce Type: new Abstract: Reinforcement learning (RL) rewards are notoriously difficult to design and control, often leading to the model learning unintended behaviors such as reward hacking. One potential solution is to monitor for reward hacking and penalize it when detected; however, training against a monitor could lead to evasive behavior, and our general understanding of how to apply monitors effectively during training is limited. To study how best to use monitors to",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Fifty-Two Shades of Pig: What the UCR Archive Really Asks Classifiers to Do",
    "link": "https://arxiv.org/abs/2611.09843",
    "description": "arXiv:2611.09843v1 Announce Type: new Abstract: The pigs were bleeding. That was the point of the experiment: could airway pressure reveal hemorrhage before it became critical? In the UCR Time Series Classification Archive, the de facto benchmark for Time Series Classification (TSC), the same recordings ask a different question: \"which of 52 pigs produced this trace?\". The dataset PigAirwayPressure is not an outlier. Although the archive is the standard benchmark, whether its tasks resemble the ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Computer-Use Agents Are Embodied Generalists",
    "link": "https://arxiv.org/abs/2611.09847",
    "description": "arXiv:2611.09847v1 Announce Type: new Abstract: In many areas of AI, general-purpose models have increasingly replaced handcrafted methods and specialized architectures. We argue that embodied AI is poised for a similar shift. Our key claim is that embodied tasks can be formulated as interaction with digital software. Specifically, we build software that renders an agent's view of a physical environment on a screen and provides controls for acting in it. A computer-use agent (CUA) can then perfo",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "On the (non-)closedness of the set of ReLU networks",
    "link": "https://arxiv.org/abs/2611.09887",
    "description": "arXiv:2611.09887v1 Announce Type: new Abstract: We prove that the set $\\mathcal{N}_N$ of ReLU networks with one hidden layer and at most $N\\in\\mathbb N$ neurons is weakly closed in $W^{1,p}(\\Omega)$, for a bounded connected open set $\\Omega\\subset\\mathbb R^d$. Consequently, every coercive, weakly lower semicontinuous energy on this space attains its minimum over $\\mathcal{N}_N$. This covers the Deep Ritz method with convex integrands, Sobolev training and Lipschitz learning. Moreover, as the wei",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Same Question, Different Answers: Auditing Persona-Dependent Variation in Six LLMs on Smoking-Cessation Advice",
    "link": "https://arxiv.org/abs/2610.42039",
    "description": "arXiv:2610.42039v1 Announce Type: cross Abstract: Hundreds of millions of people now ask large language model (LLM) chatbots for health advice, which raises a question that is simple to pose and hard to answer: does everyone get the same advice? We audit six widely deployed LLMs from four providers on smoking cessation, a domain with codified clini- cal guidance and substantial public-health stakes, by putting the same four cessation questions to twelve user personas that differ in life stage, s",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Improving Contextual Retrieval for Long Documents using Semantic Chunking and Hybrid Retrieval Strategies",
    "link": "https://arxiv.org/abs/2611.08498",
    "description": "arXiv:2611.08498v1 Announce Type: cross Abstract: The vast amount of information available in lengthy, distributed documents makes finding relevant answers difficult, especially when the answer requires connecting evidence from multiple sources. Standard Retrieval-Augmented Generation (RAG) systems often struggle with this type of \"multi-hop\" reasoning and frequently face issues with context fragmentation. In this paper, we propose a hybrid RAG framework that integrates the structured reasoning ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Electoral Intelligence: A Neural Zero-Inflated Negative Binomial Model for Forecasting Swedish Municipal Elections",
    "link": "https://arxiv.org/abs/2611.08501",
    "description": "arXiv:2611.08501v1 Announce Type: cross Abstract: Forecasting local elections is difficult because electoral competition is geographically heterogeneous, highly overdispersed, and characterized by many party-municipality combinations with little or no electoral activity. This article develops a bounded neural zero-inflated negative binomial (ZINB) model for forecasting party-level vote counts in Swedish municipal elections. The model combines a count component for expected votes, a zero-inflatio",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Drift-admissibility via Optimal Transport",
    "link": "https://arxiv.org/abs/2611.08505",
    "description": "arXiv:2611.08505v1 Announce Type: cross Abstract: We introduce structure-aware optimal transport diagnostics for assessing whether empirical time-series dynamics are compatible with a prescribed predictable-drift class. Our approach translates a pathwise property of stochastic processes into a finite-dimensional projection problem over empirical transition laws, encoding admissibility as row-wise moment constraints on local couplings and quantifying deviations via a Kullback--Leibler projection ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Structure is in the zoom: probing neural symmetry through dimensionality scaling",
    "link": "https://arxiv.org/abs/2611.08506",
    "description": "arXiv:2611.08506v1 Announce Type: cross Abstract: How much of a neural population's measured dimensionality is the code, and how much is the act of measuring it? The slope of the participation ratio against subsample size is reported for cortical populations and for the layers of language models as a number that belongs to the system. It does not. One patch of eleven thousand mouse V1 neurons returns three slopes, 0.25 along random stimulus subsets, 0.31 along drift direction, 0.35 along neuron ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Online and Survey Representations of Well-Being: Coherence and Cross-Source Correspondence",
    "link": "https://arxiv.org/abs/2611.08510",
    "description": "arXiv:2611.08510v1 Announce Type: cross Abstract: Digital traces may complement population surveys in the measurement of well-being, but the two sources do not necessarily capture identical constructs. We compare the Human Flourishing Geographic Index (HFGI) with World Values Survey and European Social Survey measures across three domains using structural equation models. The results show strong within-source coherence and construct-specific cross-source correspondence. Cross-source convergence ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "ELPAC: Endpoint-Anchored Latent Progression with Stage-Varying Multimodal Coordination",
    "link": "https://arxiv.org/abs/2611.08541",
    "description": "arXiv:2611.08541v1 Announce Type: cross Abstract: Aging cohorts increasingly combine imaging, plasma, and cognitive measurements, but most subjects provide only a partially observed cross-sectional snapshot, leaving latent stage, progression subtype, and stage-varying multimodal coordination to be inferred jointly. Existing methods estimate the cohort-level aging process, model covariance under observed covariates, or fuse modalities for prediction. However, they rarely target the joint problem ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "GenStrain: Multi-Conditional Generative Diffusion Model To Synthesize High-quality Motion and Strain Maps From Cardiac Magnetic Resonance Images",
    "link": "https://arxiv.org/abs/2611.08544",
    "description": "arXiv:2611.08544v1 Announce Type: cross Abstract: This paper presents GenStrain, a novel method for synthesizing high-quality cardiac motion-based strain maps from routinely collected cine cardiac magnetic resonance (CMR) images. Existing approaches typically rely on image registration to estimate motion (a sequence of displacements) from cine CMR images, but cine CMR presents very sparse trackable intramyocardial features, presenting challenges to estimate intramyocardial motion. An advanced im",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "pESTO: Iterative p-greedy kernel regression with risk-driven Early STOpping",
    "link": "https://arxiv.org/abs/2611.08555",
    "description": "arXiv:2611.08555v1 Announce Type: cross Abstract: Kernel-based greedy algorithms select suitable approximation nodes by minimizing point-wise error indicators, such as the power function; in this context, they are usually referred to as p-greedy approaches. In the presence of noisy data, deterministic criteria may fail, as the discrepancy between the true solution and its estimate is influenced by both approximation error and noise amplification, and the balance between the two is unknown. This ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Personalized health coaching via coachable health age and counterfactual wearable trajectories",
    "link": "https://arxiv.org/abs/2611.08568",
    "description": "arXiv:2611.08568v1 Announce Type: cross Abstract: Personalized health coaching requires moving beyond retrospective wearable summaries toward quantitative, actionable behavioral prescriptions. We introduce Coachable Health Age (CHA), an interpretable health-age metric built from modifiable physiological and behavioral signals passively captured by consumer wearables. Across the WEAR-ME (N=2,780), All of Us (N=22,748), and longitudinal Fitbit (N=1,464) cohorts, CHA aligns with established cardiom",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Just CaloCHILL: fast hadronic shower generation in a learned latent space",
    "link": "https://arxiv.org/abs/2611.08606",
    "description": "arXiv:2611.08606v1 Announce Type: cross Abstract: Calorimeter showers are the most expensive part of detector simulation, and highly granular calorimeters, in which a single hadronic shower leaves thousands of energy deposits, make them more expensive still. We present CaloCHILL (Calorimeter Hits In Learned Latents), a generative model that does not produce these deposits one by one: instead it generates a compact summary of the shower in a learned latent space and expands it to full resolution ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "AutoPYara: Next-Gen YARA Rule Generator for Malware Family Clustering",
    "link": "https://arxiv.org/abs/2611.08608",
    "description": "arXiv:2611.08608v1 Announce Type: cross Abstract: Millions of malware variants threaten users daily, such that clustering these samples is key for fast incident response. AutoYara is the current state-of-the-art for automatic YARA rule generation, but the task remains challenging on realistic datasets, where intra-family diversity and noisy clustering can degrade rule quality. We present AutoPYara, a solution armored with: (1) precise cluster centroid selection based on similarity hashing, and (",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Forcing a Letter Suppresses Refusal: Mechanistic Evidence from WMDP",
    "link": "https://arxiv.org/abs/2611.08639",
    "description": "arXiv:2611.08639v1 Announce Type: cross Abstract: Safety benchmarks for large language models (LLMs) commonly use multiple-choice question (MCQ) format. However, prior studies documented that MCQ format reduces refusal rates, which may significantly affect the safety behavior of the model. We provide a first mechanistic explanation of this effect on the Weapons of Mass Destruction Proxy (WMDP) dataset across two models - Llama-3.1-8B and Qwen3-8B. First, we use the tuned lens technique to show t",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Compressed Per-Player Local Methods for Multiplayer Federated Learning: Exact Convergence via Increment Sharing",
    "link": "https://arxiv.org/abs/2611.08686",
    "description": "arXiv:2611.08686v1 Announce Type: cross Abstract: Multiplayer Federated Learning (MpFL), introduced by Yoon et al. (2025), extends classical federated learning to settings where clients are rational players in a game with individual objectives and strategies, seeking an equilibrium. A natural baseline is Per-Player Local SGD (PEARL-SGD), where each player performs several local SGD steps before exchanging strategies through a central server. However, the original PEARL-SGD formulation does not e",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Enabling Retraining-Free Accurate Inference in Analog Compute in Memory Accelerators",
    "link": "https://arxiv.org/abs/2611.08693",
    "description": "arXiv:2611.08693v1 Announce Type: cross Abstract: Analog compute-in-memory (CIM) accelerators compute matrix-vector products directly inside memory arrays, eliminating weight movement and promising order-of-magnitude gains in inference efficiency. However, converter and device errors make pretrained models unusable on these arrays, and hardware-aware retraining is costly. We enable retraining-free, accurate inference of pretrained models on simple analog arrays with low-cost, shared calibration.",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Blind Noise Equalization for Large Data Matrices under General Variance Profiles",
    "link": "https://arxiv.org/abs/2611.08784",
    "description": "arXiv:2611.08784v1 Announce Type: cross Abstract: Low-rank approximation is a basic tool for inference from large and noisy data matrices. However, when noise variances differ across entries, a setting known as heteroskedasticity, the noise can distort the observed spectrum, producing spurious components and obscuring weak signals. To address these challenges, we develop BRINE (Blind Resolvent-based Iterative Noise Equalizer), a data-driven procedure that iteratively rescales rows and columns to",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "High-Dimensional Off-Policy Evaluation without Sample Splitting using an Onsager Correction",
    "link": "https://arxiv.org/abs/2611.08794",
    "description": "arXiv:2611.08794v1 Announce Type: cross Abstract: Reward models used for off-policy evaluation (OPE) are commonly selected using held-out data. When sample size and context dimension grow proportionally, the difference in test risk between models fitted on the full sample and on a fixed fraction of it need not vanish. Held-out evaluation can therefore consistently estimate the test risk of the model trained on the smaller sample, but because the relative ranking of candidate reward models can ch",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Beyond the Lower-Star Filtration: Alternative Filtration Methods for Persistent Homology",
    "link": "https://arxiv.org/abs/2611.08833",
    "description": "arXiv:2611.08833v1 Announce Type: cross Abstract: In the lower-star filtration (LSF), simplices are assigned filtration values according to the maximum-vertex rule, with each simplex entering the filtration when its highest-valued vertex appears. A limitation of this construction is that some higher-dimensional simplices may enter simultaneously with their boundary faces, causing certain topological features to be filled immediately upon formation and thus not appear in the resulting persistence",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Functional Dependency beyond Similarity: Hierarchical Decomposition of Training Data Attribution in Music Generative Models",
    "link": "https://arxiv.org/abs/2611.08839",
    "description": "arXiv:2611.08839v1 Announce Type: cross Abstract: Copyright analysis focuses on the similarity between two works. However, generative AI models learn from training data through functional relations beyond similarity. Training Data Attribution (TDA) estimates the influence of each training instance on a generated output and may serve as a basis for remuneration. However, prior studies find global influence, where a few training instances rank as the most influential for almost every generation. U",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "STRIDE: Learning Humanoid Locomotion in Minutes with Acceleration-Based Rewards",
    "link": "https://arxiv.org/abs/2611.08857",
    "description": "arXiv:2611.08857v1 Announce Type: cross Abstract: Learning locomotion directly on a humanoid robot is a promising direction to avoid the sim-to-real gap. However, locomotion rewards in Reinforcement Learning (RL) typically track the base velocity, which cannot be measured onboard without an external motion capture system or well-calibrated state estimator. This is why we introduce \\method{}, which learns humanoid locomotion from minutes of samples with a reward that only requires the onboard Ine",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Extending Grid Foundation Models for Phasor-Domain Dynamic Simulation",
    "link": "https://arxiv.org/abs/2611.08867",
    "description": "arXiv:2611.08867v1 Announce Type: cross Abstract: Grid Foundation Models (GridFMs) are emerging as a powerful framework for learning and transferring knowledge across power grids and grid analysis tasks. This work extends GridFMs from steady-state analysis to dynamic simulation. We present DynGridFM, which uses component-wise tokenization and a structured latent operator to learn shared dynamic representations across heterogeneous grids and enable transfer to unseen systems. Pretrained on nine g",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Reweighting for Transfer Classification: Exact Risk Conversion and Minimax Adaptation",
    "link": "https://arxiv.org/abs/2611.08876",
    "description": "arXiv:2611.08876v1 Announce Type: cross Abstract: A source can make a training mixture easier to learn while making its accuracy less valuable for the target. We study how the training problem a source creates and the finite-sample error of learning it jointly determine target-risk guarantees under reweighting. For binary classification, for each pair of laws and each positive target weight, we derive the sharpest target excess hinge-risk bound implied by mixture excess alone, uniformly over cli",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Geometry-Aware Score-Repellent Monte Carlo",
    "link": "https://arxiv.org/abs/2611.08909",
    "description": "arXiv:2611.08909v1 Announce Type: cross Abstract: The recently proposed Score-Repellent Monte Carlo (SRMC) method improves MCMC sampling by tilting the target density $\\pi$ in $\\mathbb{R}^d$ with the factor $\\exp(-\\alpha\\,\\theta_n^\\top s(x))$, where the score function $s(x) = \\nabla_x \\log \\pi(x)$, and $\\theta_n$ is the score average from past samples. However, a single scalar repellence strength $\\alpha\\ge0$ cannot handle both the steep and the flat directions in anisotropic energy landscapes a",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Task-Contribution Dynamics of Adam in Physics-Informed Neural Networks: Slow-Manifold Analysis and Gradient Modulation",
    "link": "https://arxiv.org/abs/2611.08910",
    "description": "arXiv:2611.08910v1 Announce Type: cross Abstract: Physics-informed neural networks (PINNs) often suffer from imbalanced optimization of competing loss components, particularly when approximating solutions with high-frequency or multiscale features. Although existing balancing strategies have proven effective in alleviating this difficulty, the mechanisms governing the evolution of individual task contributions to Adam's parameter updates remain insufficiently understood. We introduce task-wise i",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Grid-Oriented Probabilistic Load Forecasting for AI Data Centers",
    "link": "https://arxiv.org/abs/2611.08929",
    "description": "arXiv:2611.08929v1 Announce Type: cross Abstract: Probabilistic load forecasts for AI data centers need to represent both uncertainty under changing workloads and temporal dependence to support grid operations. This paper develops an open, grid-oriented benchmark using measured GPU power from a 448-GPU AI cluster. Forecasts are evaluated through four stages: probabilistic prediction, online uncertainty calibration, temporal scenario generation, and horizon-wide reserve sizing. Following a change",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Concordance-Optimal Continuous Music Emotion Estimation: Variance Decomposition, Dual-Branch Temporal Fusion, and Conformal Prediction Intervals",
    "link": "https://arxiv.org/abs/2611.08966",
    "description": "arXiv:2611.08966v1 Announce Type: cross Abstract: Continuous music emotion recognition (MER) estimates how Arousal and Valence evolve within a song, yet the field's standard metric, pooled frame-level correlation, is dominated by between-song differences and cannot distinguish a model that tracks emotional dynamics from one that only ranks songs by their average level. We decompose annotation variance into between- and within-song components and show that mean squared error (MSE) targets the for",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "VLA Handover: Failure-Prediction-Based Switching from On-Robot to Server VLA Models",
    "link": "https://arxiv.org/abs/2611.08987",
    "description": "arXiv:2611.08987v1 Announce Type: cross Abstract: Large vision-language-action (VLA) models generalize well but are difficult to run in real time on a robot, and small VLAs that run there fail more often. Remote inference over beyond-5G and 6G networks lets a robot use a large VLA on a server, but querying the server for every action chunk limits the number of robots per server. We propose VLA handover: the robot runs a small VLA (S-VLA) and switches to a large VLA (L-VLA) on a server only when ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Authorization Drift in LLM Agents: Evaluating Boundary Compliance in Multi-Step Tool Use",
    "link": "https://arxiv.org/abs/2611.09113",
    "description": "arXiv:2611.09113v1 Announce Type: cross Abstract: LLM agents can exceed their authorization boundaries while pursuing user goals without an adversary. We formalize this phenomenon as authorization drift across data, tool, scope, and time, and introduce the Authorization Drift Benchmark (ADB): 648 samples across seven domains, each pairing a sufficient compliant path with an attractive unauthorized shortcut. To ensure executable tasks, tempting shortcuts, and feasible compliant paths, Staged Exec",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Finite-sample Calibration Guarantees for Binary Segmentation",
    "link": "https://arxiv.org/abs/2611.09120",
    "description": "arXiv:2611.09120v1 Announce Type: cross Abstract: Machine learning based segmentation models are frequently miscalibrated, producing for each pixel a label prediction whose associated confidence does not accurately reflect the true underlying probability. This limitation is particularly critical in high-stakes applications such as medical image segmentation. Although several calibration methods have been proposed, only a small subset of them provides theoretical guarantees on the calibration err",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Calibrated concept profiles: making the reading of a model's neurons a measurement",
    "link": "https://arxiv.org/abs/2611.09196",
    "description": "arXiv:2611.09196v1 Announce Type: cross Abstract: Interpretability has largely moved from reading a model's neurons directly to reading a second model trained on the first: a probe, a sparse autoencoder, a crosscoder. The move answered real faults -- mixed meanings, thresholds without a unit, readings that did not transfer from one study to the next -- but gave up what a direct reading alone provides: nothing trained in between, the neurons themselves named, and a reading that can be repeated an",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Representational drift in a code model: behaviour settles, which neurons carry it does not",
    "link": "https://arxiv.org/abs/2611.09204",
    "description": "arXiv:2611.09204v1 Announce Type: cross Abstract: In neuroscience, representational drift is a change in which neurons carry a representation while behaviour stays the same; we measure its analogue in OpenCoder-1.5B during pretraining, for 169 Python constructs over two trillion tokens at a constant learning rate, with a noise unit on every change, at checkpoints as close as 1,000 training steps. For 16 of the 169, those whose grammar fixes a next token, the loss at those positions reaches its f",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Reconciling European Electricity Data with Diffusion Priors Learned from Observations Alone",
    "link": "https://arxiv.org/abs/2611.09265",
    "description": "arXiv:2611.09265v1 Announce Type: cross Abstract: The ENTSO-E Transparency Platform publishes generation, load, and cross-border power flows for European bidding zones. The values carry undocumented errors and violate energy conservation, and data reconciliation consists in correcting them to satisfy that balance. In this work, we formulate data reconciliation as Bayesian inference. Classical methods implicitly take a uniform prior, which we replace with a diffusion model estimated from the obse",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "AnomSep: Bridging Optimization-Based Separation and Deep Neural Refinement for Anomaly Detection with Listenable Explanations",
    "link": "https://arxiv.org/abs/2611.09279",
    "description": "arXiv:2611.09279v1 Announce Type: cross Abstract: We propose AnomSep, which combines optimiza-tion-based separation with deep neural refinement to achieve accurate anomaly detection with listenable explanations. Anomaly detection requires no predefined anomalous categories, and understanding the basis for each detection helps security personnel assess the validity of each detection. End-to-end anomaly detectors can achieve high detection accuracy but output only scalar scores, and existing anoma",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Bridging Spiking and Continuous Dynamics in Spiking Neural Networks: A Muscle-Inspired Model",
    "link": "https://arxiv.org/abs/2611.09295",
    "description": "arXiv:2611.09295v1 Announce Type: cross Abstract: Transforming the spike trains produced by spiking neural networks (SNNs) into continuous signals through biologically inspired mechanisms remains an open challenge in generative and regression tasks. In biological systems, a similar transformation occurs when muscles integrate neural spikes to produce smooth, coordinated movements. Inspired by this mechanism, we introduce a muscle-response model, a biologically motivated dynamical layer that conv",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Interpretable Context-Aware Multi-Label Retinal Classification with Dual-Hub Heterogeneous Graph Neural Network",
    "link": "https://arxiv.org/abs/2611.09309",
    "description": "arXiv:2611.09309v1 Announce Type: cross Abstract: Multi-label retinal screening requires capturing co-occurring pathologies and clinical context, yet standard multimodal fusion remains opaque. We propose a dual-hub heterogeneous graph neural network (GNN) that couples spatial fundus features and structured clinical covariates through cross-modal message passing while providing inherent interpretability. Rather than relying on post-hoc saliency approximations, our architecture exposes multi-level",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Cutpurse: Decomposing Explanation-Guided Model Extraction on Tabular Data",
    "link": "https://arxiv.org/abs/2611.09375",
    "description": "arXiv:2611.09375v1 Announce Type: cross Abstract: Explanation APIs are often treated as increasing model-extraction risk, but an end-to-end attack comparison cannot show whether an explanation reveals model-specific information or merely supplies a convenient next-query coordinate. We study this distinction for explanation-guided extraction of tabular classifiers. We separate an explanation into an attribution channel, which ranks influential features, and a coordinate channel, which supplies ca",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Graph representations of dislocation networks",
    "link": "https://arxiv.org/abs/2611.09534",
    "description": "arXiv:2611.09534v1 Announce Type: cross Abstract: The mechanical response of a crystal is governed by the evolving network of dislocations it contains, yet quantitatively linking the `state of that network' to its yield stress remains challenging. Here we represent the dislocation networks obtained from discrete dislocation dynamic simulation as graphs, using five distinct graph representations, characterize each network through a compact set of topological properties, and predict the yield stre",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Optimal Regret for Profit Maximization in Bilateral Trade",
    "link": "https://arxiv.org/abs/2611.09558",
    "description": "arXiv:2611.09558v1 Announce Type: cross Abstract: Learning to profit from trade requires learning both sides of a market: what a seller is willing to accept and what a buyer is willing to pay. We study repeated bilateral trade, where an intermediary posts a purchase price to a seller and a sale price to a buyer whose valuations are drawn from an unknown joint distribution. Trade occurs only if both parties accept their respective prices, in which case the intermediary earns the difference betwee",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "TurtLES: A Large-Scale Benchmark for Turbulent 3D Neural PDE Surrogates",
    "link": "https://arxiv.org/abs/2611.09567",
    "description": "arXiv:2611.09567v1 Announce Type: cross Abstract: Machine-learning surrogates are increasingly used to accelerate computational fluid dynamics, yet progress is limited by the lack of benchmarks capturing realistic, time-dependent turbulent flows. We introduce TurtLES, a 14 TB dataset of 3D turbulent cylinder wakes in the shear-layer transition regime, computed via high-fidelity implicit large-eddy simulations. The dataset contains 400 trajectories of 400 time steps each, with 3-11 million points",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Half-precision inference of AI weather prediction models: negligible loss of skill at a fraction of the cost",
    "link": "https://arxiv.org/abs/2611.09573",
    "description": "arXiv:2611.09573v1 Announce Type: cross Abstract: AI weather prediction models are released with 32-bit (fp32) weights and run in fp32 by default, although current GPUs compute much faster in 16-bit formats. We run five publicly available models -- Aurora, Pangu-Weather, FourCastNet, SFNO and FastNet -- on a single 16 GB GPU from 52 initial dates in 2024, in fp32 and with their networks in half precision (fp16), and verify the forecasts against ERA5. The physical state must stay in fp32: convert",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Coresets for Capacitated Clustering via Dual Concentration",
    "link": "https://arxiv.org/abs/2611.09600",
    "description": "arXiv:2611.09600v1 Announce Type: cross Abstract: We study coresets for clustering problems, focusing on the classical $k$-median and $k$-means objectives. A coreset is a small weighted summary of the input data that approximately preserves the clustering cost for every choice of centers. Such summaries are a central tool for scaling clustering algorithms to large datasets. In this work, we consider the capacitated setting, where the clustering is subject not only to choosing centers but also to",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "ReplayAudit: Auditing Outsourced LLM Fine-Tuning via Sealed Records and Selective Replay",
    "link": "https://arxiv.org/abs/2611.09607",
    "description": "arXiv:2611.09607v1 Announce Type: cross Abstract: Auditing outsourced LLM fine-tuning requires checking an untrusted provider's training while controlling verification cost. Uniform sampling ignores training-time signals, while checking a suspicious record can require replaying several preceding steps. We present ReplayAudit, a telemetry-guided auditing system that seals training records before challenges and independently replays sampled intervals from sealed checkpoints. Loss changes and param",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Kernel-Based Learning of Analytic Operators and Parametric PDEs",
    "link": "https://arxiv.org/abs/2611.09612",
    "description": "arXiv:2611.09612v1 Announce Type: cross Abstract: We study kernel-based learning of analytic operators from finite samples, with a focus on how the regularity of the target should determine the choice of the kernel. We establish embeddings of analytic operators into vector-valued reproducing kernel Hilbert spaces and derive finite-sample, high-probability guarantees that quantify the uncertainty due to random sampling: in the noiseless setting, suitable analytic kernels yield rates exponential i",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Contextual Search and Bilateral Trade with a Trace-Square-Root Potential",
    "link": "https://arxiv.org/abs/2611.09615",
    "description": "arXiv:2611.09615v1 Announce Type: cross Abstract: We present a unified potential method for contextual search and bilateral trade with one-bit feedback and obtain order-tight algorithms for both problems. Our framework starts from a Bayesian perspective in which the unknown target (for contextual search) and the unknown pair of valuations (for bilateral trade) are sampled from a known prior distribution. In that model, the decision maker bases its prediction on the posterior distribution, obtain",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "NAVE: A Normalized, Adaptive Conformer for Antarctic Whale Vocalization Detection",
    "link": "https://arxiv.org/abs/2611.09642",
    "description": "arXiv:2611.09642v1 Announce Type: cross Abstract: Antarctic whale vocalization detection requires temporally localizing call boundaries in long underwater recordings and classifying them into predefined call types. Training reliable machine learning models for this task is difficult due to the variability and sparsity of whale calls in passive acoustic monitoring datasets. These difficulties are further amplified by time-varying noise that can mask whale calls and by site-specific ambient sound ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "TensorMutation: Learning Weight-Space Mutations of Deep Learning Models on Neural Graphs",
    "link": "https://arxiv.org/abs/2611.09650",
    "description": "arXiv:2611.09650v1 Announce Type: cross Abstract: Mutation testing for deep learning (DL) faces a cost-realism trade-off. The pre-training approach produces realistic but computationally expensive mutants, whereas existing post-training operators modify trained models efficiently but produce mutants that less closely resemble real faults. This study asks whether the trade-off is necessary: can the weight-space effect of a fault-informed pre-training mutation operator be predicted from a trained ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Autonomous Particle Image Velocimetry Using Zero-Shot Sim-to-Real Reinforcement Learning",
    "link": "https://arxiv.org/abs/2611.09679",
    "description": "arXiv:2611.09679v1 Announce Type: cross Abstract: Particle image velocimetry (PIV) reconstructs a flow field from the motion of tracer particles but the reconstruction quality is bounded by how well the flow structure of interest is resolved in the images. The acquisition position is typically fixed by the operator before the measurement. We cast camera placement as a sequential decision-making problem and train a reinforcement learning agent to control a 6-DoF manipulator equipped with a camera",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Where Should Learning Live? Regret Analysis for Text, Parameter, and Joint Adaptation",
    "link": "https://arxiv.org/abs/2611.09701",
    "description": "arXiv:2611.09701v1 Announce Type: cross Abstract: Language-model systems can select prompts and parameter adapters repeatedly during deployment, using feedback to guide later choices. Earlier choices may change the context or environment inherited by later configurations. We study selection among preconstructed candidates and compare cumulative loss with the best fixed prompt--parameter pair used from the beginning. This excess loss separates into three terms: selection regret within the availab",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Are These Programmers Ripe Enough to Eat? Evaluating How LLMs Handle Lexical Knowledge Conflicts in Translation",
    "link": "https://arxiv.org/abs/2611.09785",
    "description": "arXiv:2611.09785v1 Announce Type: cross Abstract: External lexical resources can help large language models (LLMs) translate texts in low-resource languages and specialized domains, but these resources may conflict with models' prior lexical knowledge. To isolate this conflict, we construct a controlled Mandarin-to-English translation task in which familiar source words are assigned new meanings within and across semantic categories. We treat these prompt-supplied meanings as contextual knowledg",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Machine learning for lattice QCD",
    "link": "https://arxiv.org/abs/2611.09817",
    "description": "arXiv:2611.09817v1 Announce Type: cross Abstract: Machine learning (ML) methods have been explored as a means of optimizing lattice field theory calculations, with increasing interest in recent years. This chapter gives an introduction and summary to the use of ML methods to optimize lattice field theory without introducing any uncontrolled approximations. We focus on those directions which are clearly established as of late 2025, marking the 50th anniversary of the beginning of the study of lat",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Graded convolutional networks: scale invariance without the scale and robustness to unknown blur",
    "link": "https://arxiv.org/abs/2611.09878",
    "description": "arXiv:2611.09878v1 Announce Type: cross Abstract: The Gaussian jet of an image is a graded vector space: a dilation by $\\lambda$ multiplies derivatives of order $k$ by $\\lambda^{-k}$. Local graded convolutions are exactly homogeneous differential operators, and a local feature is dilation-invariant if and only if it factors through the scale-normalized jet or, without the scale, through the retraction onto the weighted sphere of the grading. Under unknown Gaussian blur the retraction changes onl",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "FlowMoP: Stochastic Multi-Person Motion Prediction",
    "link": "https://arxiv.org/abs/2611.09882",
    "description": "arXiv:2611.09882v1 Announce Type: cross Abstract: Predicting the future motion of multiple people is inherently stochastic: the same observed history admits many plausible continuations depending on intent, coordination, and social context. Yet the dominant paradigm in multi-person 3D motion prediction remains deterministic, with existing methods producing a fixed number of outputs per agent. In contrast, we present a conditional flow matching framework that jointly generates diverse future moti",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "A Theoretical Bridge Between Long-Tailed Recognition and Continual Learning",
    "link": "https://arxiv.org/abs/2306.13275",
    "description": "arXiv:2306.13275v3 Announce Type: replace Abstract: We theoretically and empirically establish a previously unexplored connection between Long-Tailed Recognition (LTR) and Continual Learning (CL). Specifically, we show that training on a long-tailed dataset with imbalance factor $\\mathrm{IF}$ drives model parameters into an $O(1/\\sqrt{\\mathrm{IF}})$ neighborhood of the dominant-class solution, under both uniform and exponentially decaying cardinality distributions. Building on this result, we es",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Towards the Worst-case Robustness of Large Language Models",
    "link": "https://arxiv.org/abs/2501.19040",
    "description": "arXiv:2501.19040v5 Announce Type: replace Abstract: Recent studies have revealed the vulnerability of large language models to adversarial attacks, where adversaries craft specific inputs to induce incorrect or harmful outputs. Although various empirical defenses have been proposed, their worst-case robustness remains poorly understood, raising concerns about how they would behave against stronger future attacks. Here, we study the worst-case robustness of LLMs from both empirical and theoretica",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Caterpillar GNN: Replacing Message Passing with Graph-Level Aggregation",
    "link": "https://arxiv.org/abs/2506.06784",
    "description": "arXiv:2506.06784v3 Announce Type: replace Abstract: Message-passing graph neural networks (MPGNNs) dominate modern graph learning. Typical efforts enhance MPGNN's expressive power by enriching the adjacency-based aggregation. In contrast, we introduce a graph-level aggregation over walk incidence-based matrices that are constructed to deliberately trade off some expressivity for stronger and more structured inductive bias. This approach allows for gradual scaling between classical message-passin",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Isotonic Quantile Regression Averaging for uncertainty quantification of electricity price forecasts",
    "link": "https://arxiv.org/abs/2507.15079",
    "description": "arXiv:2507.15079v2 Announce Type: replace Abstract: Quantifying the uncertainty of forecasting models is essential to assess and mitigate the risks associated with data-driven decisions, especially in volatile domains such as electricity markets. In this paper, we propose a computationally efficient isotonic variant of Quantile Regression Averaging (QRA), called Isotonic Quantile Regression Averaging (iQRA), for generating probabilistic forecasts from ensembles of point forecasts. Building on QR",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Causal Representation Learning from Multimodal Clinical Records under Non-Random Modality Missingness",
    "link": "https://arxiv.org/abs/2509.17228",
    "description": "arXiv:2509.17228v2 Announce Type: replace Abstract: Clinical notes contain rich patient information, such as diagnoses or medications, making them valuable for patient representation learning. Recent advances in large language models have further improved the ability to extract meaningful representations from clinical texts. However, clinical notes are often missing. For example, in our MIMIC-IV cohort, 35.15% of patients have no eligible discharge summaries. In such cases, representations can b",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Chaining 2-FWL GNNs for Combinatorial Graph Alignment",
    "link": "https://arxiv.org/abs/2510.03086",
    "description": "arXiv:2510.03086v3 Announce Type: replace Abstract: For the combinatorial graph alignment problem (GAP), finding the node correspondence that maximizes the number of common edges (nce) between two unlabeled graphs, the classical Frank-Wolfe heuristic FAQ remains a strong baseline once it is properly initialized, while existing GNN approaches struggle in the purely structural setting. We introduce a chaining procedure: a sequence of Folklore-type (2-FWL) GNNs in which each network is trained with",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Closed-Form Last Layer Optimization",
    "link": "https://arxiv.org/abs/2510.04606",
    "description": "arXiv:2510.04606v3 Announce Type: replace Abstract: Neural networks are typically optimized with variants of stochastic gradient descent. Under a squared loss, however, the optimal solution to the linear last layer weights is known in closed-form. We propose to leverage this during optimization, treating the last layer as a function of the backbone parameters, and optimizing solely for these parameters. We show this is equivalent to alternating between gradient descent steps on the backbone and ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Guided Star-Shaped Masked Diffusion",
    "link": "https://arxiv.org/abs/2510.08369",
    "description": "arXiv:2510.08369v3 Announce Type: replace Abstract: The performance of pre-trained masked diffusion models is often constrained by their sampling procedure, which makes decisions irreversible and struggles in low-step generation regimes. We introduce a novel sampling algorithm that works with pre-trained models and, after a lightweight fine-tuning of a single layer, significantly improves sample quality and efficiency. Our method reformulates the generation process using a star-shaped paradigm, ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Convergence of optimizers implies eigenvalues filtering at equilibrium",
    "link": "https://arxiv.org/abs/2510.09034",
    "description": "arXiv:2510.09034v2 Announce Type: replace Abstract: Ample empirical evidence in deep neural network training suggests that a variety of optimizers tend to find nearly global optima. In this article, we adopt the reversed perspective that convergence to an arbitrary point is assumed rather than proven, focusing on the consequences of this assumption. From this viewpoint, in line with recent advances on the edge-of-stability phenomenon, we argue that different optimizers effectively act as eigenva",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Iterative Policy Optimization: Batch-Online Multi-Turn RL via Single-Turn RL",
    "link": "https://arxiv.org/abs/2511.21638",
    "description": "arXiv:2511.21638v5 Announce Type: replace Abstract: Practical LLM agents often operate over multi-turn conversations where success is determined only after the full interaction ends. Most multi-turn RL methods train via on-policy rollouts, but unlike in single-turn RL, the policy cannot produce a trajectory alone, since an external environment must respond after each agent turn. For conversational agents, this environment is a user, but real users are generally unavailable inside the training lo",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Fourier Neural Operators Explained: A Practical Perspective",
    "link": "https://arxiv.org/abs/2512.01421",
    "description": "arXiv:2512.01421v3 Announce Type: replace Abstract: Partial differential equations (PDEs) govern a wide variety of dynamical processes in science and engineering, yet obtaining their numerical solutions often requires high-resolution discretizations and repeated evaluations of complex operators, leading to substantial computational costs. Neural operators have recently emerged as a powerful framework for learning mappings between function spaces directly from data, enabling efficient surrogate m",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Advanced Global Wildfire Activity Modeling with Hierarchical Graph ODE",
    "link": "https://arxiv.org/abs/2601.01501",
    "description": "arXiv:2601.01501v2 Announce Type: replace Abstract: Wildfires, as an integral component of the Earth system, are governed by a complex interplay of atmospheric, oceanic, and terrestrial processes spanning a vast range of spatiotemporal scales. Modeling their global activity on large timescales is therefore a critical yet challenging task. While deep learning has recently achieved significant breakthroughs in global weather forecasting, its potential for global wildfire behavior prediction remain",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Surrogate-based Optimization via Clustering for Box-Constrained Problems",
    "link": "https://arxiv.org/abs/2601.07442",
    "description": "arXiv:2601.07442v2 Announce Type: replace Abstract: Global optimization of large-scale, complex systems such as multi-physics black-box simulations and real-world industrial systems is important but challenging. This work presents a novel Surrogate-Based Optimization framework based on Clustering, SBOC for global optimization of such systems, which can be used with any surrogate modeling technique. At each iteration, it uses a single surrogate model for the entire domain, employs k-means cluster",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Designing Service Systems from Textual Evidence",
    "link": "https://arxiv.org/abs/2601.21471",
    "description": "arXiv:2601.21471v2 Announce Type: replace Abstract: In service system design, it is often the case that the main evidence of system performance appears in textual form, such as customer support transcripts, complaint narratives, and compliance review reports. With the increasing use of large language models (LLMs), these textual trajectories can be converted into low-cost proxy scores that support comparison and optimization of candidate service configurations. However, LLM-based evaluations can",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "What Does a Sparse Autoencoder Feature Do? A Weight-Based Account",
    "link": "https://arxiv.org/abs/2601.22447",
    "description": "arXiv:2601.22447v2 Announce Type: replace Abstract: Sparse autoencoders (SAEs) have emerged as a powerful technique for decomposing language model representations into interpretable features. Current interpretation pipelines infer feature semantics from activation patterns, implicitly assuming every feature has a semantic explanation while overlooking the computational roles features inherit from the SAE training objective. We introduce a weight-based interpretation framework that requires no ac",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Minerva: Reinforcement Learning with Verifiable Rewards for Cyber Threat Intelligence LLMs",
    "link": "https://arxiv.org/abs/2602.00513",
    "description": "arXiv:2602.00513v4 Announce Type: replace Abstract: Cyber threat intelligence (CTI) analysts routinely convert noisy, unstructured security artifacts into standardized, automation-ready representations. Although large language models (LLMs) show promise for this task, existing approaches remain brittle when producing structured CTI outputs and have largely relied on supervised fine-tuning (SFT). In contrast, CTI standards and community-maintained resources define canonical identifiers and schema",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Revisiting the Generic Transformer: Deconstructing a Strong Baseline for Time Series Foundation Models",
    "link": "https://arxiv.org/abs/2602.06909",
    "description": "arXiv:2602.06909v2 Announce Type: replace Abstract: The recent surge of interest in Time Series Foundation Models has rapidly advanced the field. Yet, heterogeneous training setups across studies make it difficult to determine whether performance improvements came from architectural innovations or effective data engineering. In this work, we investigate whether a standard patch Transformer architecture, paired with a straightforward training protocol, can match the zero-shot forecasting performa",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Sample Efficient Generative Molecular Optimization with Joint Self-Improvement",
    "link": "https://arxiv.org/abs/2602.10984",
    "description": "arXiv:2602.10984v2 Announce Type: replace Abstract: Generative molecular optimization aims to design molecules with properties surpassing those of existing compounds. However, evaluating candidate molecules is expensive, so sample efficiency, i.e., generating optimized molecules within a fixed evaluation budget, is essential. Moreover, in the offline setting, where a surrogate model approximates candidate evaluation, sample inefficiency compounds with surrogate error, further limiting performanc",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Project and Generate: Divergence-Free Neural Operators for Incompressible Flows",
    "link": "https://arxiv.org/abs/2603.24500",
    "description": "arXiv:2603.24500v2 Announce Type: replace Abstract: Learning-based models for fluid dynamics often operate in unconstrained function spaces, leading to physically inadmissible, unstable simulations. Penalty-based methods can reduce constraint violations but do not guarantee exact incompressibility. In this work, we introduce a unified framework that enforces the incompressible continuity equation as a hard, intrinsic constraint for both deterministic and generative modeling. We integrate a diffe",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Automatic feature identification in least-squares policy iteration using the Koopman operator framework",
    "link": "https://arxiv.org/abs/2603.26464",
    "description": "arXiv:2603.26464v2 Announce Type: replace Abstract: In this paper, we present a Koopman autoencoder-based least-squares policy iteration (KAE-LSPI) algorithm for reinforcement learning (RL). The KAE-LSPI algorithm is based on reformulating the so-called least-squares fixed-point approximation method in terms of extended dynamic mode decomposition (EDMD), thereby enabling automatic feature learning via the Koopman autoencoder (KAE) framework. The approach is motivated by the lack of a systematic ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Inter-Layer Hessian Analysis of Neural Networks with DAG Architectures",
    "link": "https://arxiv.org/abs/2604.11639",
    "description": "arXiv:2604.11639v2 Announce Type: replace Abstract: Automatic differentiation computes loss Hessians, while interpreting inter-layer interactions requires an explicit choice of graph-indexed blocks. This paper presents an analytical formalism that decomposes the full Hessian into blocks indexed by the DAG of an architecture. The standard decomposition $H = H^{GN} + H^T$ separates the Gauss-Newton component (positive semidefinite for a convex output loss) from the tensor component (residual curva",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Distinct mechanisms underlying in-context learning in transformers",
    "link": "https://arxiv.org/abs/2604.12151",
    "description": "arXiv:2604.12151v2 Announce Type: replace Abstract: Modern distributed networks, notably transformers, acquire a remarkable ability (termed `in-context learning') to adapt their computation to input statistics, such that a fixed network can be applied to data from a broad range of systems. Here, we provide a complete mechanistic characterization of this behavior in transformers trained on a finite set $S$ of discrete Markov chains. The transformer displays four algorithmic phases, characterized ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Dyna-Style Safety Augmented Reinforcement Learning: Staying Safe in the Face of Uncertainty",
    "link": "https://arxiv.org/abs/2604.25508",
    "description": "arXiv:2604.25508v2 Announce Type: replace Abstract: Safety is a key problem in reinforcement learning, especially during exploration. While safety filters are promising to address this issue, they are ill-suited for high- dimensional systems with unknown dynamics. We propose Dyna-style Safety Augmented Reinforcement Learning (Dyna-SAuR), a novel algorithm that learns a control policy as well as a safety filter requiring minimal domain knowledge by leveraging a learned uncertainty-aware dynamics ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Analytical Correction for Subsampling Bias in Drifting Models",
    "link": "https://arxiv.org/abs/2604.27239",
    "description": "arXiv:2604.27239v2 Announce Type: replace Abstract: Drifting models are capable one-step generative models trained to follow a drifting field. The field combines attractive and repulsive softmax-weighted centroids over the data and current-generator distributions. In practice, only a minibatch of $n$ samples from each distribution is available, and each centroid is approximated by an empirical estimate. In this paper, we begin by showing that the minibatch centroid is in general a biased estimat",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "AutoREC: A reinforcement learning platform for equivalent circuit model generation",
    "link": "https://arxiv.org/abs/2604.27266",
    "description": "arXiv:2604.27266v4 Announce Type: replace Abstract: This paper introduces AutoREC, an open-source Python platform for developing, training and evaluating reinforcement learning (RL) agents that automatically generate equivalent circuit models (ECMs) from electrochemical impedance spectroscopy (EIS) data. Although ECMs are widely used to interpret EIS measurements, their identification typically relies on manual trial-and-error, requiring domain expertise and limiting scalability, particularly in",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "CompleteRXN: Toward Completing Open Chemical Reaction Databases",
    "link": "https://arxiv.org/abs/2605.00222",
    "description": "arXiv:2605.00222v3 Announce Type: replace Abstract: Chemical reaction datasets such as USPTO suffer from substantial incompleteness, frequently missing byproducts, co-reactants, and stoichiometric coefficients. This limits their applicability and reliability in downstream applications. Here, we introduce CompleteRXN, a large-scale supervised benchmark for reaction completion under realistic missing-data conditions. We construct a dataset of aligned incomplete and atom-balanced reactions by mappi",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "No Triangulation Without Representation: Generalization in Topological Deep Learning",
    "link": "https://arxiv.org/abs/2605.06467",
    "description": "arXiv:2605.06467v2 Announce Type: replace Abstract: Despite an ever-increasing interest in topological deep learning models that target higher-order datasets, there is no consensus on how to evaluate such models. This is exacerbated by the fact that topological objects permit operations, such as structural refinements, that are not appropriate for graph data. In this work, we extend MANTRA, a benchmark dataset containing manifold triangulations, to a larger class of manifolds with more diverse h",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Tyche: One Step Flow for Efficient Probabilistic Weather Forecasting",
    "link": "https://arxiv.org/abs/2605.06916",
    "description": "arXiv:2605.06916v2 Announce Type: replace Abstract: Probabilistic weather forecasting requires not only accurate trajectories, but calibrated distributions over plausible atmospheric futures. Recent data-driven systems have achieved remarkable deterministic skill, and diffusion-based ensemble forecasters have substantially improved sample realism and uncertainty quantification. However, their inference cost scales with forecast horizon, ensemble size, and the number of denoising steps required f",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Black-box model classification under the discriminative factorization",
    "link": "https://arxiv.org/abs/2605.07878",
    "description": "arXiv:2605.07878v2 Announce Type: replace Abstract: Access to modern generative systems is often restricted to querying an API (the ``black-box'' setting) and many properties of the system are unknown to the user at inference time. Recent work has shown that low-dimensional representations of models based on the relationship of their embedded responses to a set of queries are useful for inferring model-level properties. However, the quality of these representations is highly sensitive to the que",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Compact SO(3) Equivariant Atomistic Foundation Models via Structural Pruning",
    "link": "https://arxiv.org/abs/2605.08885",
    "description": "arXiv:2605.08885v2 Announce Type: replace Abstract: SO(3) equivariant graph neural networks have become the dominant paradigm for atomistic foundation models, achieving high accuracy and data efficiency by building rotational symmetry directly into the architecture. Yet the computational cost of their higher-order tensor operations creates a tough trade-off between model accuracy and inference efficiency. In this paper, we propose a structural pruning method for SO(3) equivariant atomistic found",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Sobolev Regularized MMD Gradient Flow",
    "link": "https://arxiv.org/abs/2605.11884",
    "description": "arXiv:2605.11884v2 Announce Type: replace Abstract: We analyze Sobolev descent, a regularized variant of maximum mean discrepancy (MMD) gradient flow based on a gradient penalty on the MMD witness function. This regularization mitigates the non-convexity of the MMD objective, and yields provable \\emph{global} convergence guarantees in MMD, in both continuous and discrete time. A surprising appeal is that our convergence analysis does not rely on isoperimetric assumptions on the target distributi",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Test-Time Learning with an Evolving Library",
    "link": "https://arxiv.org/abs/2605.14477",
    "description": "arXiv:2605.14477v3 Announce Type: replace Abstract: We introduce EvoLib, a test-time learning framework that enables large language models to accumulate, reuse, and evolve knowledge across problem instances without parameter updates or external supervision. Instead of adapting model parameters, our approach maintains a shared library of knowledge abstractions, including modular skills and reflective insights, automatically extracted from the model's own inference trajectories. To support continu",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Dual-Rate Diffusion: Accelerating diffusion models with an interleaved heavy-light network",
    "link": "https://arxiv.org/abs/2605.18190",
    "description": "arXiv:2605.18190v2 Announce Type: replace Abstract: Diffusion models achieve state-of-the-art generative performance but suffer from high computational costs during inference due to the repeated evaluation of a heavy neural network. In this work, we propose Dual-Rate Diffusion, a method to accelerate sampling by interleaving the execution of a heavy high-capacity context encoder and a light efficient denoising model. The context encoder is evaluated sparsely to extract high-dimensional features,",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "The Silent Hyperparameter: Quantifying the Impact of Inference Backends on LLM Reproducibility",
    "link": "https://arxiv.org/abs/2605.19537",
    "description": "arXiv:2605.19537v3 Announce Type: replace Abstract: Progress in LLMs is increasingly measured through standardized benchmarks, where state-of-the-art improvements are often separated by fractions of a percentage point. At the same time, the computational cost of evaluating modern LLMs has driven widespread adoption of specialized inference backends, software systems that execute trained models efficiently at inference time. While critical for scalability, system-level optimizations, such as cust",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Contrastive Distribution Matching for Amortized Sequential Monte Carlo in Discrete Diffusion",
    "link": "https://arxiv.org/abs/2605.23346",
    "description": "arXiv:2605.23346v2 Announce Type: replace Abstract: Discrete diffusion models have emerged as powerful frameworks for generating structured categorical data. However, efficiently sampling from reward-tilted distributions remains a fundamental challenge. While Twisted Sequential Monte Carlo (SMC) offers asymptotic exactness for this task, estimating the optimal twist function in discrete state spaces necessitates costly Monte Carlo approximations, resulting a severe computational bottleneck at in",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Instance-Optimal Estimation with Multiple LLM Judges on a Budget",
    "link": "https://arxiv.org/abs/2605.23362",
    "description": "arXiv:2605.23362v2 Announce Type: replace Abstract: Evaluating large language models increasingly relies on LLM-as-a-judge protocols, but such evaluations remain costly: different judges have different prices and reliabilities, and the difficulty of each prompt-response pair can vary substantially. This raises a basic allocation question: under a fixed budget, how should one distribute evaluation queries across heterogeneous judges and instances to obtain the most accurate score estimates? We fo",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Generalized Intention Modeling in Multi-Agent Reinforcement Learning",
    "link": "https://arxiv.org/abs/2605.31318",
    "description": "arXiv:2605.31318v3 Announce Type: replace Abstract: Modeling an opponent's intent is critical for effective decision-making in non-cooperative, competitive, and general-sum multi-agent reinforcement learning. Existing opponent modeling methods encode intent using an embedding derived from episode information chosen a priori, such as the opponent's next action or a future environment state, and use this to guide the ego-agent's behavior. These approaches assume that the chosen information is univ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Regularized Large Neighborhood Search",
    "link": "https://arxiv.org/abs/2606.02294",
    "description": "arXiv:2606.02294v2 Announce Type: replace Abstract: Operations research practitioners typically tackle NP-hard combinatorial problems using large neighborhood search (LNS), a scalable heuristic that iteratively refines a current solution by locally re-optimizing subsets of its variables. In contrast, most existing approaches for integrating combinatorial optimization layers into neural networks still assume access to an exact global solution, which is computationally intractable. We bridge this ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "(Mis)generalization of Helpful-Only Fine-tuning",
    "link": "https://arxiv.org/abs/2606.04413",
    "description": "arXiv:2606.04413v2 Announce Type: replace Abstract: Helpful-only models, that is, models that are trained to always follow user intent, are valuable for dangerous capability evaluations and other areas of AI R&D where refusals would be an obstacle. Little is known about the generalization properties of helpful-only training: helpful-only models refuse less than their harmless counterparts, but previous work has not studied other dimensions of their alignment. We study the shortcomings of existin",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Data-efficient flood depth prediction through domain-aware coreset selection and tabular foundation models",
    "link": "https://arxiv.org/abs/2606.05265",
    "description": "arXiv:2606.05265v2 Announce Type: replace Abstract: Near-real-time flood depth prediction demands surrogate models that are accurate, fast, and transferable across watersheds. Supervised surrogates can match physics-based simulators in accuracy but need millions of training rows per watershed and cannot extrapolate beyond their original mesh. We propose a domain-aware coreset construction pipeline that conditions a tabular foundation model at inference time. The pipeline stratifies storms by ret",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Dominant-Layer ZO: A Single Layer Dominates Zeroth-Order Fine-Tuning of LLMs",
    "link": "https://arxiv.org/abs/2606.05516",
    "description": "arXiv:2606.05516v2 Announce Type: replace Abstract: Zeroth-order (ZO) optimization enables memory-efficient fine-tuning of large language models (LLMs) using only forward passes, but it remains unclear how useful adaptation is distributed across layers. In this work, we reveal a surprising phenomenon: ZO fine-tuning is sharply dominated by a single decoding layer. Across multiple LLM families and downstream tasks, fine-tuning this dominant layer alone consistently matches or even exceeds full-mo",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Autoregressive Diffusion World Models for Off-Policy Evaluation of LLM Agents",
    "link": "https://arxiv.org/abs/2606.05558",
    "description": "arXiv:2606.05558v4 Announce Type: replace Abstract: Evaluating large language model (LLM) agents in multi-turn interactive environments is expensive and risky, as it requires online environment interaction. We propose ADWM (Autoregressive Diffusion World Model), an evaluation framework that estimates the performance of a new LLM agent policy purely from pre-collected trajectories. The core idea is to learn a latent diffusion world model that simulates how the environment responds to the evaluati",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Intention Driven Identification of In-Possession Match Phases in Association Football through Temporal Graph Learning",
    "link": "https://arxiv.org/abs/2606.09289",
    "description": "arXiv:2606.09289v4 Announce Type: replace Abstract: Recognising intentions from continuous movement trajectories is an important problem in spatiotemporal data mining. This becomes difficult when behaviours change over time and their boundaries cannot be directly observed. Football provides a useful setting for studying this problem because tactical intentions emerge from the coordinated movements of multiple players during possession. Existing methods for match phase recognition often classify ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "A Memory Efficient Unified Algorithm for Online Learning of Linear Dynamical Systems",
    "link": "https://arxiv.org/abs/2607.02050",
    "description": "arXiv:2607.02050v3 Announce Type: replace Abstract: Motivated by the challenge of stabilizing a general unknown linear dynamical system (LDS) from observations, we study the natural prerequisite of online prediction. Our goal is to achieve sublinear regret with a memory footprint that adapts to the intrinsic complexity of the dynamics rather than the full hidden-state dimension. We focus on the practically central regime of systems with low instability complexity -- eigenvalues outside the real ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "From Machine Learning to Large-Scale EO Products: Good Practices and Guidelines for Making Maps",
    "link": "https://arxiv.org/abs/2607.24532",
    "description": "arXiv:2607.24532v4 Announce Type: replace Abstract: The past decade has seen an explosion of large-scale geospatial products derived from Earth observation (EO) data using machine learning (ML). Driven by expanding model capacity and compute availability, the domain has reached a level of operational maturity where practitioners can generate high-resolution global products spanning thematic areas as diverse as human settlement, vegetation structure, and natural hazards. Deep learning has expande",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "The Sparsity Whisperer",
    "link": "https://arxiv.org/abs/2608.06630",
    "description": "arXiv:2608.06630v2 Announce Type: replace Abstract: Pruning reduces the inference cost of large language models, but existing criteria primarily preserve large activations or reconstruct layer outputs. We argue that this overlooks a key computation performed by particularly sparsity-sensitive neurons in the MLP up and gate projections: separating similar inputs into dissimilar outputs. This suggests that effective pruning should preserve not only activations, but also the differences between out",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Stochastic Autoregressive Learning",
    "link": "https://arxiv.org/abs/2608.07224",
    "description": "arXiv:2608.07224v2 Announce Type: replace Abstract: Motivated by LLMs, which generate outputs by iteratively sampling from next-token distributions, we introduce a PAC-learning model for binary stochastic autoregressive learning. This generalizes the deterministic autoregressive learning framework of Joshi et al., COLT 2025. In our model, one fixed generator assigns a Bernoulli next-token distribution to every prompt string. Starting from an input prompt, a token is sampled and appended to the p",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Monroe: A Molecular Foundation Model for In-Context Probabilistic Inference",
    "link": "https://arxiv.org/abs/2608.18982",
    "description": "arXiv:2608.18982v2 Announce Type: replace Abstract: Bioassay activity prediction is often data-limited because drug-discovery datasets rely on time-consuming and expensive wet-lab experiments for data generation and evaluation. This challenge has inspired recent research into molecular foundation models (MFMs), which aim to encode general-purpose chemical knowledge into molecular representations that generalize well in data-constrained scenarios. This paper presents Monroe, a new MFM with severa",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "How I learned to stop worrying and love StopGrads: Stationarity, Convergence, and a case study on Flow Map Learning",
    "link": "https://arxiv.org/abs/2609.16222",
    "description": "arXiv:2609.16222v2 Announce Type: replace Abstract: Stopgrads are widely used in training machine learning models, but stopgrads can alter the gradient, stationary points and convergence guarantees of the original objective, which can make stopgrad training theoretically ungrounded. We introduce a stopgrad regression principle, which identifies a general template for stopgrad objectives with a closed-form characterization of stationary points and their uniqueness, unifying stopgrad objectives fo",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "CleanScore: Black-Box Benchmark Audits with Negative Controls and Sensitivity Bounds",
    "link": "https://arxiv.org/abs/2609.22183",
    "description": "arXiv:2609.22183v2 Announce Type: replace Abstract: Public benchmark scores reflect skill, prior exposure to the questions, or both, and for most models the training data are unknown. CleanScore is a black-box audit: the estimator needs only a correct-or-incorrect score for each form, not training data or weights. Each benchmark question becomes a parent item with one public form and two independently written fresh forms that keep its numbers, facts and answer. The audit reports an interval for ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Simple Extensions of Single-Objective Acquisition Functions and Hedge Strategies for Multi-Objective Bayesian Optimization",
    "link": "https://arxiv.org/abs/2609.31940",
    "description": "arXiv:2609.31940v2 Announce Type: replace Abstract: Multi-objective Bayesian optimization (MOBO) is commonly approached through specialized acquisition functions or scalarization schemes designed to explicitly account for trade-offs among non-preferential objectives. In this work, we show that such complexity might be unnecessary. We propose a framework that extends standard single-objective acquisition functions directly to the multi-objective setting through a hypervolume-based methodology. We",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "ASTRA: ADMM-Accelerated Topology Reconfiguration for Dynamic Satellite Constellations",
    "link": "https://arxiv.org/abs/2609.33993",
    "description": "arXiv:2609.33993v3 Announce Type: replace Abstract: Dynamic topology reconfiguration is central to the reliability and efficiency of large satellite constellations, yet many existing approaches rely on idealized assumptions such as full constellation deployment or uniform orbital spacing. We present Adaptive Satellite Topology via Regret-Aware learning (ASTRA), a theoretically grounded framework for dynamic satellite topology reconfiguration that builds on an online learning formulation and make",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Parameter Symmetries Determine Representational Geometry in Overparameterized Nonlinear Networks",
    "link": "https://arxiv.org/abs/2609.39078",
    "description": "arXiv:2609.39078v2 Announce Type: replace Abstract: Representations are routinely used across machine learning, psychology, and neuroscience to draw inferences about the computations of biological and artificial systems. Such inferences presume that the geometry of these representations reflects the computation being performed. For artificial neural networks, however, the extent to which the function a network computes constrains this geometry remains unclear. One key obstacle is that these netw",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Certification-Enhanced Generalization Bounds",
    "link": "https://arxiv.org/abs/2610.06238",
    "description": "arXiv:2610.06238v2 Announce Type: replace Abstract: We investigate the use of formal methods to provide tight and sound generalization bounds for learning algorithms. By casting the traditional notion of algorithmic stability as a specification to be verified, we demonstrate that recent advances in reachability analysis can yield provable bounds on the generalization of a given model and algorithm on a sample dataset. As sample-specific algorithmic stability is insufficient to bound the usual di",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Revisiting Temporal Regularization for Smooth Control in Deep Reinforcement Learning",
    "link": "https://arxiv.org/abs/2610.07910",
    "description": "arXiv:2610.07910v3 Announce Type: replace Abstract: Deep Reinforcement Learning policies can produce nonsmooth action oscillations that hinder deployment on physical robots. Existing architectural and penalty-based approaches seek spatial smoothness by directly reducing sensitivity to changes in state inputs, but their broad constraints can degrade task performance as stronger smoothing is pursued. Temporal regularization instead constrains action differences along observed transitions, but has ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Performative Prediction with Selective Labels",
    "link": "https://arxiv.org/abs/2610.08272",
    "description": "arXiv:2610.08272v2 Announce Type: replace Abstract: Many social applications of machine learning exhibit performative effects: population behavior changes in response to deployed models. Performative prediction studies this interaction through a distribution map that relates each model to the population distribution it induces. One of the main results in this framework showed that repeated risk minimization (RRM), which updates models by retraining on the most recent data, can converge to a stab",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "KDFP: A first-principles approach to knowledge distillation in large language models",
    "link": "https://arxiv.org/abs/2610.10854",
    "description": "arXiv:2610.10854v2 Announce Type: replace Abstract: Knowledge distillation is an established technique for improving the capabilities of small, efficient student models by training them with the representations of larger, more capable teacher models. Much of the recent work in the distillation of large language models (LLMs) has focused on distilling abilities learned during post-training, such as instruction following, chain-of-thought reasoning, and tool usage. This has left a large research g",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "A Comprehensive Comparison of Reinforcement Learning Algorithms in Autonomous Driving",
    "link": "https://arxiv.org/abs/2610.19429",
    "description": "arXiv:2610.19429v2 Announce Type: replace Abstract: This paper presents a comprehensive comparison of four representative Reinforcement Learning (RL) methods in autonomous vehicle (AV) decision-making, including Fitted Value Iteration (FVI), Rollout Classification Policy Iteration (RCPI), Deep Q-Network (DQN), and a discrete-action adaptation of Deep Deterministic Policy Gradient (D-DDPG). The four methods are applied to the same AV decision-making problem at an unsignalized intersection and are",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "MemWM: Associative Memory-Enhanced Latent World Models for Long-Horizon Planning",
    "link": "https://arxiv.org/abs/2610.19683",
    "description": "arXiv:2610.19683v3 Announce Type: replace Abstract: World models trained via latent dynamics offer a scalable path for embodied planning, yet existing methods suffer from representational collapse, computational overhead, and limited long-horizon capability. We introduce Memory World Model (MemWM), an associative memory-enhanced latent world model that augments JEPA-style prediction with a content-addressable memory bank. MemWM learns high-level historical representations directly from observati",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Learnable Hodge-Laplacian Driven Mixture of Experts for Steady-PDE Surrogates on Coarse Unstructured Meshes",
    "link": "https://arxiv.org/abs/2610.20585",
    "description": "arXiv:2610.20585v4 Announce Type: replace Abstract: Surrogate models approximate the solutions of partial differential equations given a certain geometry and boundary conditions. Traditional transformer-based approaches employ a single mixing mechanism to the whole solution. although the solution fields exhibit variations across multiple spatial scales. We propose a mixture of transformer experts that combines a routing mechanism with multiscale supervision. Specifically, the individual experts ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Sparse Sum-of-Squares Layers for Certified Learning",
    "link": "https://arxiv.org/abs/2610.34590",
    "description": "arXiv:2610.34590v2 Announce Type: replace Abstract: A central limitation of modern machine learning systems is the lack of formal certificates guaranteeing their behavior beyond empirical, sample-based evaluation. Sum-of-squares (SOS) methods provide such guarantees by certifying polynomial inequalities over continuous domains via semidefinite programming (SDP). While prior work has introduced SDP layers as differentiable components in neural networks, repeated learning calls can lose the comput",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Variational Consequence-Driven Offline Reinforcement Learning",
    "link": "https://arxiv.org/abs/2610.38238",
    "description": "arXiv:2610.38238v2 Announce Type: replace Abstract: Offline reinforcement learning (RL) typically mitigates distribution shift by imposing divergence constraints on the action distributions of the learned and behavior policies. However, this paradigm cannot ensure the underlying dynamic consistency structure: even minor action deviations can lead to drastically different transitions, inadvertently driving the agent away from the offline dataset. To address this, we explore policy constraints thr",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "RAPID: Increasing Efficiency of Internal Distillation via Randomized Methods",
    "link": "https://arxiv.org/abs/2611.04081",
    "description": "arXiv:2611.04081v2 Announce Type: replace Abstract: Knowledge distillation is a technique used to transfer the expertise of large teacher models into small, efficient student models. Recent advances have integrated the distillation of internal activations, more directly training students to learn similar representations as the teacher. One of the core challenges of internal distillation is the dimensional incompatibility between the student and teacher internal representations. Existing methods ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Follow the Features: SAE Feature-Guided Data-Efficient Instruction-Tuning of Large Language Models",
    "link": "https://arxiv.org/abs/2611.04085",
    "description": "arXiv:2611.04085v2 Announce Type: replace Abstract: Selecting small, effective instruction-tuning datasets requires identifying which aspects of the original data to retain. We introduce Follow the Features (FtF), a data-selection method that uses sparse autoencoder (SAE) features to characterize training data and guide subset construction. FtF ranks features using dataset-level activation statistics, scores samples by their expression of highly ranked features, and incorporates feature resampli",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Support Vector Machines Directly Minimise KL Divergence",
    "link": "https://arxiv.org/abs/2611.05557",
    "description": "arXiv:2611.05557v2 Announce Type: replace Abstract: Support vector machines (SVMs) are fundamentally grounded in geometric margin maximisation and currently lack a mainstream probabilistic interpretation. This keeps them theoretically isolated from probabilistic machine learning models that are naturally comparable and combinable. In this paper, we bridge this gap by proving that the dual objectives of both support vector classification and support vector regression are exact, constrained Kullba",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Reward Budgeting Reduces Premature Convergence in Reinforcement Learning for LLM Reasoning",
    "link": "https://arxiv.org/abs/2611.05942",
    "description": "arXiv:2611.05942v3 Announce Type: replace Abstract: RL for LLM reasoning often plateaus early as its policy sharpens. Policy entropy is studied as both a diagnostic and a control signal, but increasing it alone does not reliably change the eventual plateau in our experiments. We analyze RL's implicit target policy using a sharpness factor $\\kappa$ and effective counterpart $\\kappa_{\\mathrm{eff}}$ that describe how reward or advantage gaps translate into probability-ratio gaps. We introduce rewar",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "FaCoDiff: Factor-Correlated Diffusion for Multivariate Probabilistic Forecasting",
    "link": "https://arxiv.org/abs/2611.06166",
    "description": "arXiv:2611.06166v2 Announce Type: replace Abstract: Multivariate probabilistic forecasting requires modeling cross-variable dependence alongside marginal uncertainty. The challenge is to learn this dependence while controlling marginal noise scales and avoiding dense covariance costs. We propose Factor-Correlated Diffusion (FaCoDiff), which couples a compact conditional statistical estimator with structured denoising. History-conditioned factor loadings use distinct coefficients for forecast-cen",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "KolTa: A Physics-Informed Active Learning Framework for Formulation Discovery with Limited Data",
    "link": "https://arxiv.org/abs/2611.06394",
    "description": "arXiv:2611.06394v2 Announce Type: replace Abstract: Finding high-performing formulations is difficult when few have been measured and experimental budgets are limited. We propose KolTa, an active learning framework that selects batches to discover the top 5% of formulations at a target temperature under a fixed query budget. KolTa combines a three-stage predictor of component contributions, role-conditioned interactions, and anchored temperature response with task-specific soft physics constrain",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Structural Conditional Independence Test via Neural Quantile Resolution",
    "link": "https://arxiv.org/abs/2611.07165",
    "description": "arXiv:2611.07165v2 Announce Type: replace Abstract: Conditional independence testing is difficult when dependence is weak, localized, or expressed through distributional changes rather than a global mean shift. Existing tests usually return a scalar statistic or p-value, which can detect rejection but gives limited resolution about where the conditional law changes. We propose QRCIT, a quantile-resolution conditional independence test that compares P(X | Z) and P(X | Y, Z) through an amortized q",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Provably Efficient Representation Learning for Low-Rank CMDPs",
    "link": "https://arxiv.org/abs/2611.07295",
    "description": "arXiv:2611.07295v2 Announce Type: replace Abstract: We study representation learning in low-rank Constrained Markov Decision Processes (CMDPs), where both value and reward functions are approximated by a set of unknown representation vectors, and the transition dynamics admit a low-rank factorization. The objective is to maximize expected cumulative rewards while complying with constraints on the expected cumulative utility. To achieve this, we propose \\texttt{MFRLC} (Model-Free Representation L",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Reinforcing What the Student Has Learned: Teacher-Guided On-Policy Distillation",
    "link": "https://arxiv.org/abs/2611.07722",
    "description": "arXiv:2611.07722v2 Announce Type: replace Abstract: On-policy distillation (OPD) improves language-model reasoning through dense teacher feedback on student-generated responses. We first observe an amplitude disparity in this feedback: on math reasoning responses, style-related positions exhibit 3.5 times the mean absolute teacher--student log-probability difference of mathematical positions. Scaling OPD updates by these discrepancies thus directs much of the update strength toward matching the ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Nowcasting of Tropical Cyclone Wind Fields and Intensity from Geostationary Imagery",
    "link": "https://arxiv.org/abs/2611.08255",
    "description": "arXiv:2611.08255v2 Announce Type: replace Abstract: High-resolution tropical cyclone surface wind speeds derived from synthetic aperture radar (SAR) observations can support storm structure and intensity modelling, but remain spatially and temporally sparse and unavailable near-real-time. Geostationary satellites capture cloud tops continuously in space and time, but do not directly resolve surface winds. Here, we present simple neural networks to predict 2D wind fields and storm-scale intensity",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Discovering Update Rules for Opponent Shaping in General-Sum Games",
    "link": "https://arxiv.org/abs/2611.08335",
    "description": "arXiv:2611.08335v2 Announce Type: replace Abstract: In general-sum games, self-interested learners can reach outcomes that are poor for everyone, which has motivated methods that shape the opponent's learning. Methods like Learning with Opponent-Learning Awareness (LOLA), which differentiates through the opponent's learning process, and Model-Free Opponent Shaping (M-FOS), which uses model-free optimisation methods for long-horizon opponent shaping, have enabled mutual cooperation and exploitati",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Conformal Prediction for Time-Dependent PDEs",
    "link": "https://arxiv.org/abs/2611.08409",
    "description": "arXiv:2611.08409v2 Announce Type: replace Abstract: Uncertainty quantification is crucial in scientific machine learning, where models inform safety-critical tasks such as flood forecasting, financial risk management, and thermal control in machines. Conformal prediction provides distribution-free coverage guarantees, but in time-dependent settings common to physics and engineering, these guarantees can break down, leading to systematic undercoverage. We study this problem in the context of surr",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Identifying Drift, Diffusion, and Causal Structure from Temporal Snapshots",
    "link": "https://arxiv.org/abs/2410.22729",
    "description": "arXiv:2410.22729v5 Announce Type: replace-cross Abstract: Stochastic differential equations (SDEs) are a fundamental tool for modelling dynamic processes, including gene regulatory networks (GRNs), contaminant transport, financial markets, and image generation. However, learning the underlying SDE from data is a challenging task, especially if individual trajectories are not observable. Motivated by burgeoning research in single-cell datasets, we present the first comprehensive approach for join",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Linear Bandits on Ellipsoids: Minimax Optimal Algorithms",
    "link": "https://arxiv.org/abs/2502.17175",
    "description": "arXiv:2502.17175v2 Announce Type: replace-cross Abstract: We consider linear stochastic bandits where the set of actions is an ellipsoid. We provide the first known minimax optimal algorithm for this problem. We first derive a novel information-theoretic lower bound on the regret of any algorithm, which must be at least $\\Omega(\\min(d \\sigma \\sqrt{T} + d \\|\\theta\\|_{A}, \\|\\theta\\|_{A} T))$ where $d$ is the dimension, $T$ the time horizon, $\\sigma^2$ the noise variance, $A$ a matrix defining the ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Robust Multimodal Learning via Entropy-Gated Contrastive Fusion",
    "link": "https://arxiv.org/abs/2505.15417",
    "description": "arXiv:2505.15417v2 Announce Type: replace-cross Abstract: Real-world multimodal systems routinely face missing-input scenarios, and in reality, robots lose audio in a factory or a clinical record omits lab tests at inference time. Standard fusion layers either preserve robustness or calibration but never both. We introduce Adaptive Entropy-Gated Contrastive Fusion (AECF), a single light-weight layer that (i) adapts its entropy coefficient per instance, (ii) enforces monotone calibration across a",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Encoding of musical structures in hidden units of restricted Boltzmann machines",
    "link": "https://arxiv.org/abs/2509.04899",
    "description": "arXiv:2509.04899v5 Announce Type: replace-cross Abstract: Restricted Boltzmann machines (RBMs) are energy-based models originating from statistical physics. In this study, we investigate how musical structures are represented in the hidden layer of a Bernoulli-Bernoulli RBM trained on binary piano-roll representations of J.~S.~Bach's music. By examining the visible patterns induced by individual hidden units, we find that the hidden layer primarily captures local temporal and pitch-statistical f",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Enabling Approximate Joint Sampling in Diffusion LMs",
    "link": "https://arxiv.org/abs/2509.22738",
    "description": "arXiv:2509.22738v4 Announce Type: replace-cross Abstract: In autoregressive language models, each token is sampled by conditioning on all the past tokens; the overall string has thus been sampled from the correct underlying joint distribution represented by the model. In contrast, masked diffusion language models generate text by unmasking tokens out of order and potentially in parallel. Generating an overall string sampled from the correct underlying joint distribution would (again) require exa",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Optimal In-context Adaptivity and Distributional Robustness of Transformers",
    "link": "https://arxiv.org/abs/2510.23254",
    "description": "arXiv:2510.23254v5 Announce Type: replace-cross Abstract: We study in-context learning problems where a Transformer is pretrained on tasks drawn from a mixture distribution $\\pi=\\sum_{\\alpha\\in\\mathcal{A}} \\lambda_{\\alpha} \\pi_{\\alpha}$, called the pretraining prior, in which each mixture component $\\pi_{\\alpha}$ is a distribution on tasks of a specific difficulty level indexed by $\\alpha$. Our goal is to understand the performance of the pretrained Transformer when evaluated on a different test",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Outlier-Robust Multi-Output Gaussian Processes",
    "link": "https://arxiv.org/abs/2510.26401",
    "description": "arXiv:2510.26401v2 Announce Type: replace-cross Abstract: Multi-output Gaussian process (MOGP) regression allows modelling dependencies among multiple correlated response variables. Similarly to standard Gaussian processes (GPs), MOGPs are sensitive to model misspecification and outliers, which can distort predictions within individual outputs. In the multi-output case, this situation can be further exacerbated as anomalous observations in one response can adversely influence predictions for oth",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "GIMLET: Generalizable and Interpretable Model Learning through Embedded Thermodynamics",
    "link": "https://arxiv.org/abs/2512.19936",
    "description": "arXiv:2512.19936v3 Announce Type: replace-cross Abstract: We develop a data-driven framework for discovering constitutive relations in models of fluid flow and scalar transport. Under the assumption that velocity and/or scalar fields are measured, our approach infers unknown closure terms in the governing equations as neural networks. The target to be discovered is the constitutive relations only, while the temporal derivative, convective transport terms, and pressure-gradient term in the govern",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Embedding stochastic dynamics in latent manifolds of recurrent neural networks",
    "link": "https://arxiv.org/abs/2602.14885",
    "description": "arXiv:2602.14885v3 Announce Type: replace-cross Abstract: Recurrent neural networks (RNNs) provide a theoretical framework for understanding computation in biological neural circuits through their ability to support rich time-dependent behaviour. Whilst high-dimensional by construction, they can be used to encode low-dimensional dynamical systems, for example by restricting to low-rank connectivity, hence mirroring the emergence of latent neural manifolds found in empirical neural data. Here, we",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "SegMate: Asymmetric Attention-Based Lightweight Architecture for Efficient Multi-Organ Segmentation",
    "link": "https://arxiv.org/abs/2602.23903",
    "description": "arXiv:2602.23903v2 Announce Type: replace-cross Abstract: State-of-the-art models for medical image segmentation achieve excellent accuracy, but require substantial computational resources, limiting deployment in typical resource-constrained clinical settings. We present SegMate, an efficient 2.5D framework that achieves state-of-the-art accuracy, while considerably reducing computational requirements. Our efficient design is the result of meticulously integrating asymmetric architectures, atten",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "SimpliHuMoN: Simplifying Human Motion Prediction",
    "link": "https://arxiv.org/abs/2603.04399",
    "description": "arXiv:2603.04399v2 Announce Type: replace-cross Abstract: Human motion prediction combines the tasks of trajectory forecasting and human pose prediction. For each of the two tasks, specialized models have been developed. Combining these models for holistic human motion prediction is non-trivial, and recent methods have struggled to compete on established benchmarks for individual tasks. To address this, we propose a simple yet effective transformer-based model for human motion prediction. The mo",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Atomic Trajectory Modeling with State Space Models for Biomolecular Dynamics",
    "link": "https://arxiv.org/abs/2603.17633",
    "description": "arXiv:2603.17633v2 Announce Type: replace-cross Abstract: Understanding the dynamic behavior of biomolecules is fundamental to elucidating biological function and facilitating drug discovery.While Molecular Dynamics (MD) simulations provide a rigorous physical basis for studying these dynamics, they remain computationally expensive for long timescales.Recent deep generative models accelerate conformation generation but often either discard temporal correlations entirely or struggle to condition ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Tackling the Sign Problem in the Doped Hubbard Model with Normalizing Flows",
    "link": "https://arxiv.org/abs/2603.18205",
    "description": "arXiv:2603.18205v2 Announce Type: replace-cross Abstract: The Hubbard model at finite chemical potential is a cornerstone for understanding doped correlated systems, but simulations are severely limited by the sign problem. In the auxiliary-field formulation, the spin basis mitigates the sign problem, yet severe ergodicity issues have limited its use. We extend recent advances with normalizing flows at half-filling to finite chemical potential by introducing an annealing scheme enabling ergodic ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "LangFlow: Continuous Diffusion Rivals Discrete in Language Modeling",
    "link": "https://arxiv.org/abs/2604.11748",
    "description": "arXiv:2604.11748v4 Announce Type: replace-cross Abstract: Continuous diffusion has served as a foundation for high-fidelity, controllable, and few-step generation across continuous data modalities such as images, videos, and molecular structures. However, in language modeling, prior continuous diffusion language models (DLMs) lag behind discrete counterparts. Existing categorical and simplex-based approaches operate over extremely large and sparse language spaces, while prior embedding-space app",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "DeepRitzSplit: A Variational Neural Operator Framework for Gradient Flows with Application to Dendritic Growth",
    "link": "https://arxiv.org/abs/2604.18261",
    "description": "arXiv:2604.18261v2 Announce Type: replace-cross Abstract: Phase-field models are widely used to simulate microstructure evolution but their numerical solution remains computationally demanding. Neural operator surrogates provide a promising alternative, yet existing approaches are data-driven, requiring large datasets and exhibiting limited robustness when extrapolating to unseen configurations. We introduce DeepRitzSplit, an unsupervised neural operator framework for gradient-flow systems based",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Duality for the Adversarial Total Variation",
    "link": "https://arxiv.org/abs/2604.18540",
    "description": "arXiv:2604.18540v2 Announce Type: replace-cross Abstract: Adversarial training of binary classifiers can be reformulated as regularized risk minimization involving a nonlocal total variation. Building on this perspective, we establish a characterization of the subdifferential of this total variation using duality techniques. To achieve this, we derive a dual representation of the nonlocal total variation and a related integration-by-parts formula, involving a nonlocal gradient and divergence. We",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Sparse Network Inference under Imperfect Detection and its Application to Ecological Networks",
    "link": "https://arxiv.org/abs/2604.18820",
    "description": "arXiv:2604.18820v3 Announce Type: replace-cross Abstract: Recovering latent structure from count data has received considerable attention in network inference, particularly when one seeks both cross-group interactions and within-group similarity patterns in bipartite networks, which are widely used in ecology research. Such networks are often sparse and prone to imperfect detection. Existing models mainly focus on interaction recovery, while the induced similarity graphs are much less studied. M",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Hypergraph Generation via Structured Stochastic Diffusion",
    "link": "https://arxiv.org/abs/2605.05024",
    "description": "arXiv:2605.05024v2 Announce Type: replace-cross Abstract: Hypergraphs model higher-order interactions, but realistic hypergraph generation remains difficult because incidence, hyperedge-size heterogeneity, and overlap structure are not faithfully captured by pairwise reductions. We propose \\HEDGE, a generative model defined directly on relaxed incidence matrices via a structured stochastic diffusion. The forward process combines a hypergraph-specific two-sided heat operator with an Ornstein--Uhl",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Spectrum-Adaptive Generalization Bounds for Trained Deep Transformers",
    "link": "https://arxiv.org/abs/2605.07297",
    "description": "arXiv:2605.07297v2 Announce Type: replace-cross Abstract: Understanding why trained Transformers generalize well is a fundamental problem in modern machine learning theory, and complexity-based generalization bounds provide a principled way to study this question. While existing norm-based bounds for Transformers remove the explicit polynomial dependence on the hidden dimension, they typically impose fixed norm constraints specified a priori and can exhibit unfavorable exponential dependence on ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Measuring and Decomposing Mode Separation via the Canonical Diffusion",
    "link": "https://arxiv.org/abs/2605.08777",
    "description": "arXiv:2605.08777v2 Announce Type: replace-cross Abstract: Mode separation, namely how sharply a distribution fragments into barrier-separated clusters, is a fundamental geometric property of densities, difficult to quantify in high dimensions. Modes are often the meaningful alternatives in the data, such as the conformations of a molecule or the distinct semantic types among a generative model's outputs. Mode separation is distinct from dispersion, which is what standard label-free tools capture",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "PGID: Progressive Guided Inversion and Denoising for Robust Watermark Detection",
    "link": "https://arxiv.org/abs/2605.09319",
    "description": "arXiv:2605.09319v5 Announce Type: replace-cross Abstract: With the proliferation of AI-generated images, digital watermarking has become an essential safeguard for protecting intellectual property and mitigating malicious exploitation. Recent works on semantic watermarking have enabled efficient copyright protection for diffusion models. However, the dependence of semantic watermarking on diffusion inversion for watermark detection creates a critical vulnerability. Imprint removal and forgery at",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Scratchpad Patching: Decoupling Compute from Patch Size in Byte-Level Language Models",
    "link": "https://arxiv.org/abs/2605.09630",
    "description": "arXiv:2605.09630v2 Announce Type: replace-cross Abstract: Tokenizer-free language models eliminate the tokenizer step of the language modeling pipeline by operating directly on bytes; patch-based variants further aggregate contiguous byte spans into patches for efficiency. However, the average patch size chosen at the model design stage governs a tight trade-off: larger patches reduce compute and KV-cache footprint, but degrade modeling quality. We trace this trade-off to patch lag: until a patc",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Equivariant Reinforcement Learning for Clifford Quantum Circuit Synthesis",
    "link": "https://arxiv.org/abs/2605.10910",
    "description": "arXiv:2605.10910v2 Announce Type: replace-cross Abstract: We consider the problem of synthesizing Clifford quantum circuits for devices with all-to-all qubit connectivity. We approach this task as a reinforcement learning problem in which an agent learns to discover a sequence of elementary Clifford gates that reduces a given symplectic matrix representation of a Clifford circuit to the identity. This formulation permits a simple learning curriculum based on random walks from the identity. We in",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Coreset-Induced Conditional Velocity Flow Matching",
    "link": "https://arxiv.org/abs/2605.12951",
    "description": "arXiv:2605.12951v3 Announce Type: replace-cross Abstract: We propose Coreset-Induced Conditional Velocity Flow Matching (CCVFM), a generative model that augments hierarchical rectified flow with a data-informed source distribution. Standard flow matching regresses only the conditional mean of the velocity; hierarchical flow matching instead models the full conditional velocity law with a second, inner flow in velocity space, but this inner flow is asked to transport isotropic Gaussian noise to a",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Backdoor Channels Hidden in Latent Space: Extending Cryptographic Undetectability to Modern Neural Networks",
    "link": "https://arxiv.org/abs/2605.13214",
    "description": "arXiv:2605.13214v4 Announce Type: replace-cross Abstract: Recent cryptographic results establish that neural networks can be backdoored such that no efficient algorithm can distinguish them from a clean model. These guarantees, however, have been confined to stylised architectures of limited practical relevance, leaving open whether comparable undetectability extends to modern, end-to-end trained networks. We construct such an attack mechanism for deep neural network architectures, closely align",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Training-Free Generative Sampling via Moment-Matched Score Smoothing",
    "link": "https://arxiv.org/abs/2605.14276",
    "description": "arXiv:2605.14276v2 Announce Type: replace-cross Abstract: Diffusion models generate samples by denoising along the score of a perturbed target distribution. In practice, one trains a neural diffusion model, which is computationally expensive. Recent work suggests that score matching implicitly smooths the empirical score, and that this smoothing bias promotes generalization by capturing low-dimensional data geometry. We propose moment-matched score-smoothed overdamped Langevin dynamics (MM-SOLD)",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Beyond MMSE: Enhancing PnP Restoration with ProxiMAP",
    "link": "https://arxiv.org/abs/2605.16396",
    "description": "arXiv:2605.16396v2 Announce Type: replace-cross Abstract: Plug-and-Play (PnP) methods for imaging inverse problems replace the proximal operator of the prior, a maximum a posteriori (MAP) denoiser, with a pretrained minimum mean squared error (MMSE) denoiser. MMSE estimates are oversmoothed, motivating recent work to target the MAP with diffusion-model scores. We show that MAP-targeting iterations converge to cartoon-like images with learned scores, but to realistic ones with the exact scores of",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "DiRotQ: Rotation-Aware Quantization for 4-bit Diffusion Transformers",
    "link": "https://arxiv.org/abs/2605.16732",
    "description": "arXiv:2605.16732v2 Announce Type: replace-cross Abstract: Diffusion Transformers (DiTs) achieve state-of-the-art image generation quality but incur substantial memory and computational costs at inference. While aggressive Post-Training Quantization (PTQ) to 4-bit precision offers significant efficiency gains, it typically results in severe quality degradation. Existing approaches, including smoothing-based methods, mixed-precision schemes, rotation techniques, and low-rank residual methods, part",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Self-Distillation is Optimal Among Spectral Shrinkage Estimators",
    "link": "https://arxiv.org/abs/2605.17778",
    "description": "arXiv:2605.17778v2 Announce Type: replace-cross Abstract: Self-distillation has emerged as a promising technique for improving model performance in modern machine learning systems. We develop the statistical foundations of self-distillation in high-dimensional linear regression by introducing and analyzing a broad class of estimators, namely spectral shrinkage estimators. We consider both spiked and general covariance matrices. For the former, we establish that when the covariance has $s$ distin",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Optimizing Computational-Statistical Runtime for Wasserstein Distance Estimation",
    "link": "https://arxiv.org/abs/2605.20122",
    "description": "arXiv:2605.20122v2 Announce Type: replace-cross Abstract: Squared Wasserstein distance is a frequently used tool to measure discrepancy between probability distributions. This distance is typically computed between empirical measures of size $n$ from two underlying random samples. Unfortunately, even in lower dimensional Euclidean space problems $\\left( d \\in \\{2,3\\} \\right)$, algorithms for Wasserstein distance computation with approximate or exact precision guarantees scale poorly in the runti",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Oracle Supervision Transfers for Hyperparameter Prediction in Model-Based Image Denoising",
    "link": "https://arxiv.org/abs/2605.20479",
    "description": "arXiv:2605.20479v2 Announce Type: replace-cross Abstract: Hyperparameter prediction is a critical practical bottleneck for model-based image denoisers, ranging from classical TV/TGV variational solvers to modern diffusion-based models such as DiffPIR. While existing learned predictors can achieve near-oracle performance, this approach scales poorly: each new configuration conventionally requires its own oracle-labeled training set, and each label requires a hierarchical grid search evaluated aga",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Uncertainty-aware neural emulation reveals climate-resilient maize traits at scale",
    "link": "https://arxiv.org/abs/2605.22848",
    "description": "arXiv:2605.22848v3 Announce Type: replace-cross Abstract: Climate change threatens maize yields worldwide, yet identifying which genetic traits sustain productivity under future conditions requires exploring an enormous space of genotype, soil, and climate combinations that process-based crop models are too costly to simulate at scale. Here we develop an integrated probabilistic emulation framework that transforms a mechanistic crop simulator (APSIM) into a fast, uncertainty-aware discovery engi",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "No Safe Dose: How Training Data Drives Unsafe Image Generation",
    "link": "https://arxiv.org/abs/2605.28137",
    "description": "arXiv:2605.28137v2 Announce Type: replace-cross Abstract: Text-to-image models are trained on web-scale data that inevitably contains unsafe images, yet whether this contamination directly drives unsafe generation has not been tested under controlled conditions. We train the same text-to-image model on corpora that differ only in their fraction of unsafe images (0% to 9.6%) and in size (100K to 8M), and evaluate 10,000 generations per model with four independent safety classifiers. Output unsafe",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Consolidating Rewarded Perturbations for LLM Post-Training",
    "link": "https://arxiv.org/abs/2605.31494",
    "description": "arXiv:2605.31494v2 Announce Type: replace-cross Abstract: Post-training of language models is commonly framed as a sample-score-update loop implemented by gradient descent. A recent line of work, exemplified by RandOpt, relocates this loop to weight space, sampling Gaussian perturbations around a pretrained model and ensembling the top-K rewarded specialists at inference. While competitive with PPO and GRPO under matched training compute, this prediction-level ensemble incurs K forward passes pe",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Action-BED: Task-Driven Bayesian Experimental Design with Singly Intractable Objectives",
    "link": "https://arxiv.org/abs/2606.23662",
    "description": "arXiv:2606.23662v2 Announce Type: replace-cross Abstract: Bayesian experimental design (BED) has traditionally been based on maximising expected uncertainty reductions from prior to posterior. A major shortfall of this approach is that it leads to doubly intractable objectives that are difficult to optimise, while customising them to particular downstream tasks of interest can also be difficult. Following first principles decision theory, we demonstrate that BED can alternatively be formulated i",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "SGD Provably Prioritizes a Shortcut Spurious Feature in the XOR Model",
    "link": "https://arxiv.org/abs/2606.30444",
    "description": "arXiv:2606.30444v3 Announce Type: replace-cross Abstract: Neural networks are known to be susceptible to over-reliance on spurious correlations. However, the precise mechanism by which models exploit shortcut features is not fully understood, and algorithms to mitigate this behavior rely on as yet unjustified assumptions about the learned representations. In this work, we provide the first end-to-end theoretical characterization of spurious feature learning for two-layer ReLU neural networks tra",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Model-Agnostic FDR Control via Group Gaussian Mirror and Permutation SHAP",
    "link": "https://arxiv.org/abs/2608.00989",
    "description": "arXiv:2608.00989v2 Announce Type: replace-cross Abstract: Most FDR-controlled feature selection methods are designed for coordinate-wise hypotheses, where each feature has a single weight or importance score. This abstraction fails in sequential and grouped models, where one original feature is represented by a block of sub-features, such as lags, recurrent states, or attention-based interactions. We propose a grouped-feature FDR control framework for such settings. For grouped linear models, we",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "What to Preserve, Where to Adapt: A Depth-Wise Analysis of Forgetting in Continual Gynecological Image Segmentation",
    "link": "https://arxiv.org/abs/2608.13660",
    "description": "arXiv:2608.13660v3 Announce Type: replace-cross Abstract: The clinical management of gynecological diseases often relies on medical imaging for diagnosis, treatment planning, and follow-up. Segmentation in this setting is challenging because successive tasks may differ in imaging modality, target anatomy, pathology, and annotation structure. Continual learning allows models to adapt to new tasks without simultaneous access to previous datasets. However, when successive tasks differ substantially",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Guidance for Prior Change via Density Ratio Estimation",
    "link": "https://arxiv.org/abs/2608.21729",
    "description": "arXiv:2608.21729v2 Announce Type: replace-cross Abstract: Simulation-Based Inference (SBI) serves as a vital framework for parameter inference in scientific fields where simulators involve intractable likelihoods, yet while amortized generative models offer rapid posterior estimation, they are often restricted by the specific priors used during training, thereby limiting their flexibility as prior knowledge evolves. To address this prior dependency, PriorGuide was introduced as an inference-time",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Sharp Minimax Regret for Infinite-Memory Logistic Prediction",
    "link": "https://arxiv.org/abs/2608.26515",
    "description": "arXiv:2608.26515v3 Announce Type: replace-cross Abstract: We study sequential prediction of binary marks whose log-odds are a linear function of all past inputs. The inputs are independent uniform signs. The coefficient of the input observed $j$ steps earlier is unknown, but its absolute value is at most a known number $r_j$, and $\\sum_j r_j\\le B$. A learner is judged by its expected cumulative log loss in excess of the loss of the true conditional probabilities. We show that for every such sequ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Same Request, Different Answer: Quantization Amplifies Cache-Induced Divergence in LLM Serving",
    "link": "https://arxiv.org/abs/2609.04748",
    "description": "arXiv:2609.04748v3 Announce Type: replace-cross Abstract: Major open-source serving stacks reuse the key-value tensors of a shared prefix by default. We measure what this prefix reuse costs in reproducibility. Holding model, decoding, seed and request order fixed at batch size one, we ran an eighty-episode multi-turn agentic tool-use workload with prefix reuse on and off across two engines and four weight formats. Without prefix reuse, repeated runs reproduced every token and log-probability in ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Sampling Reveals Style: Unsupervised, Training-Free Discovery of Prompt-Conditional Stylistic Axes in LLM Activations",
    "link": "https://arxiv.org/abs/2609.19150",
    "description": "arXiv:2609.19150v3 Announce Type: replace-cross Abstract: Large language models (LLMs) encode rich stylistic structure in their hidden activations, but discovering which stylistic dimensions are salient for a given prompt typically requires supervised contrastive data. We present a training-free, prompt-conditional alternative: we repeatedly sample completions of a single prompt at elevated temperature, apply Principal Component Analysis (PCA) to the pooled hidden activations, and label the resu",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Panoptic Scene Program Diffusion Transformer",
    "link": "https://arxiv.org/abs/2609.31780",
    "description": "arXiv:2609.31780v2 Announce Type: replace-cross Abstract: Modern text-to-image models produce high-fidelity images but still struggle with compositional prompts that require instance identity, attribute ownership, counting, spatial ordering, and role-sensitive relations. We introduce Panoptic Scene Program Diffusion Transformer (PSP-DiT), a diffusion-transformer architecture that treats a panoptic scene program as a first-class latent variable rather than an external control signal or post-hoc p",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Think Fast, Plan Selectively: Adaptive Deliberation for Efficient Data-Driven MPC",
    "link": "https://arxiv.org/abs/2609.32591",
    "description": "arXiv:2609.32591v3 Announce Type: replace-cross Abstract: Data-driven model predictive control (MPC) combines learned world models with online trajectory optimization, achieving strong performance in continuous control. However, the per-step cost of sampling and evaluating hundreds of candidate trajectories restricts deployment to control frequencies well below what real-time robotics demands. Motivated by the dual-process theory of human cognition, which distinguishes between fast, intuitive pr",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Amortized Score-Hamiltonian Policy Iteration: A Grid-Free Scheme for Relaxed Stochastic Control Problems",
    "link": "https://arxiv.org/abs/2610.04285",
    "description": "arXiv:2610.04285v2 Announce Type: replace-cross Abstract: We develop an amortized, grid-free implementation of continuous Langevin dynamics based policy-value iteration for entropy-regularized, infinite-horizon relaxed stochastic control problems. The improvement rate of the exact iteration is a discounted aggregate of relative Fisher information between the policy and the Gibbs law of its Hamiltonian. The associated score residual is the velocity with which the control's Langevin dynamics trans",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Adaptive Variance Reduction across Smoothness and Noise Conditions",
    "link": "https://arxiv.org/abs/2610.13799",
    "description": "arXiv:2610.13799v2 Announce Type: replace-cross Abstract: In this paper, we study adaptive stochastic non-convex optimization under unknown smoothness and noise conditions. Our algorithms require no smoothness constant, noise bound, initial function gap, or oracle-regime label. We first propose a fixed-budget method that combines normalized momentum, recursive variance reduction, and a fresh gradient stage, followed by fresh validation of the candidates. We prove that the same output has expecte",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "DIFFLET: A Fast Inference Engine for Diffusion Transformer Models on AWS Trainium",
    "link": "https://arxiv.org/abs/2610.23047",
    "description": "arXiv:2610.23047v3 Announce Type: replace-cross Abstract: On AWS Trainium2, every component of a diffusion model runs as a program compiled ahead of time for fixed shapes, while pipelines differ across models, prompt lengths across requests, and caching decisions across denoising steps. We present Difflet, a serving engine in which five model pipelines share one compilation backend, joint attention is split across cores by attention head, and a host controller decides at each denoising step whet",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Cognitive Maps in Large Language Models",
    "link": "https://arxiv.org/abs/2610.25596",
    "description": "arXiv:2610.25596v2 Announce Type: replace-cross Abstract: It has long been proposed that animals construct cognitive maps to support flexible behavior in novel environments. We tested whether large language models form analogous internal representations using relational reasoning tasks and causal \"mosaic\" experiments. Models beyond the ten-billion-parameter scale inferred unstated relationships and generalized to synthetic entity names. Across models and tasks, models formed abstract representat",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Measure Before You Train: Typed Decision Models vs. a Classical Baseline vs. a Generative LLM for Routing a Personal Multilingual Inbox",
    "link": "https://arxiv.org/abs/2610.32955",
    "description": "arXiv:2610.32955v3 Announce Type: replace-cross Abstract: Personal email agents decide, for every message, its type and urgency and whether to draft a reply, create a task or ignore it. In production these decisions are delegated to a generative LLM or to rules, and their error rate is rarely measured: the stored labels were written by the system itself. We describe Foyer, a self-hosted personal inbox agent, and a measurement protocol -- stratified sampling, frozen snapshots, thread-grouped spli",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "False Belief Dissemination, Persistence and Mitigation in Multi-Agent Social Networks Through the Lens of the Mandela Effect",
    "link": "https://arxiv.org/abs/2610.33026",
    "description": "arXiv:2610.33026v2 Announce Type: replace-cross Abstract: Multi-agent social networks are emerging as communities in which agents communicate, retain memories, and publish information that others can find as evidence. These interactions create opportunities for false claims to spread and remain influential beyond their original sources, analogous to the Mandela effect in human societies, in which many people recall the same false memory. In this paper, we systematically study false-belief dynami",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Revisiting Temporal Link Prediction through Structural Proximity",
    "link": "https://arxiv.org/abs/2610.38385",
    "description": "arXiv:2610.38385v2 Announce Type: replace-cross Abstract: Existing temporal link prediction methods typically rely on learned temporal representations to capture evolving interaction patterns. In this paper, we show that a classical structural proximity measure can match or outperform these methods without training or learned temporal sequence modeling. We revisit Personalized PageRank (PPR) on historical interaction graphs, using simple sliding-window retention or exponential time decay. Surpri",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Dynamic Merging Mutually-Distilled Multi-View Networks for RGB-Event-based Representation Learning",
    "link": "https://arxiv.org/abs/2611.00107",
    "description": "arXiv:2611.00107v2 Announce Type: replace-cross Abstract: Multi-modal fusion algorithms combining conventional frame-based cameras and event cameras have recently attracted substantial research attention. Typically, existing approaches convert event streams into frames, voxels, or tensors, and then learn the required spatiotemporal information from these transformed event representations for fusion with conventional frame-camera data. Obviously, such paradigms only exploit the limited representa",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "PixelBench: Can LLMs Understand and Generate Images Pixel by Pixel?",
    "link": "https://arxiv.org/abs/2611.02540",
    "description": "arXiv:2611.02540v2 Announce Type: replace-cross Abstract: Large language models (LLMs) can generate visual assets through text-based formats such as SVG and CAD, but these symbolic representations describe images using high-level primitives rather than explicit raster values. We ask whether LLMs can instead generate pixel images directly through their existing vocabulary, without a learned image tokenizer or decoder. We introduce PixelBench, a benchmark for text-to-pixel (T2P) and image-to-pixel",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Structured Visual Landscape: Generating Preferred Representations in Biological and Artificial Neural Networks",
    "link": "https://arxiv.org/abs/2611.03597",
    "description": "arXiv:2611.03597v2 Announce Type: replace-cross Abstract: Understanding how neurons respond to visual stimulus is an important question in both deep learning and neuroscience. It has significant implications for enhancing the interpretability of black-box artificial neural networks and for understanding the visual representation in the human brain. We propose a structured visual representations landscape and design an activation-based prior that allows us to effectively regularize the landscape ",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Descending Everest, Part II: Oracle Complexity of Minimizing a Sum of Convex $(L_0,L_1)$-Smooth Functions",
    "link": "https://arxiv.org/abs/2611.04171",
    "description": "arXiv:2611.04171v2 Announce Type: replace-cross Abstract: We study the minimization of the average of $n$ convex $(L_0,L_1)$-smooth functions: the Hessian norm of each function is bounded by an affine function of its gradient norm. We assume known upper bounds $R$ on the distance from the starting point to a minimizer and $\\delta$ on the difference between the minimum of the average and the average of the infima of the components. We derive upper and lower bounds on the oracle complexity of reac",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "CacheGraft: Enhancing Retrieval-Augmented Generation via Latent-Space Document Enrichment",
    "link": "https://arxiv.org/abs/2611.07393",
    "description": "arXiv:2611.07393v2 Announce Type: replace-cross Abstract: Recent work in machine learning has demonstrated that transformer-based language model agents can communicate state not only through text, but also directly in latent space via key-value (KV) caches. In this paper, we argue that such cache-to-cache translation can provide utility beyond the original motivating application of real-time agent communication and can instead be utilized for retrieval-augmented generation (RAG). Building on the",
    "pub_date": "2026-11-09",
    "source": "ArXiv cs.LG",
    "category": "AI 研究"
  },
  {
    "title": "Is Jensen Huang’s job on the line? Yale’s Jeffrey Sonnenfeld estimates it’s “about a 50-50”",
    "link": "https://techcrunch.com/2026/11/08/is-jensen-huangs-job-on-the-line-yales-jeffrey-sonnenfeld-estimates-its-about-a-50-50/",
    "description": "Nvidia’s board is investigating Jensen Huang over his relationship with a suspected Chinese spy, and Yale’s Jeffrey Sonnenfeld thinks it’s roughly a coin flip whether Huang stays on as CEO.",
    "pub_date": "2026-11-09",
    "source": "TechCrunch AI",
    "category": "AI 产业"
  },
  {
    "title": "DeepX Tapes Out Second-Gen Chip, Projects 6.7× Performance Gain With LPDDR5x-PIM",
    "link": "https://www.eetimes.com/deepx-tapes-out-second-gen-chip-projects-6-7x-performance-gain-with-lpddr5x-pim/",
    "description": "DeepX is targeting edge markets including robotics with its second-generation AI accelerator, which can run large LLMs on device in under 5 W. The post DeepX Tapes Out Second-Gen Chip, Projects 6.7× Performance Gain With LPDDR5x-PIM appeared first on EE Times.",
    "pub_date": "2026-11-09",
    "source": "EE Times",
    "category": "半导体"
  },
  {
    "title": "Nvidia will investigate CEO Jensen Huang’s relationship with possible Chinese spy",
    "link": "https://techcrunch.com/2026/11/08/nvidia-says-its-investigating-ceo-jensen-huangs-relationship-with-possible-chinese-spy/",
    "description": "In a memo to the company, Huang admitted that he had an affair.",
    "pub_date": "2026-11-08",
    "source": "TechCrunch AI",
    "category": "AI 产业"
  },
  {
    "title": "Here’s the full text of Jensen Huang’s memo to Nvidia",
    "link": "https://www.theverge.com/ai-artificial-intelligence/1029595/full-text-jensen-huang-affair-memo-nvidia",
    "description": "On Sunday, Nvidia announced it was launching an investigation into CEO Jensen Huang's relationship with Alice Huang, an AI executive and agent of the Chinese government. In addition to the Board of Directors announcing the investigation, Huang sent a memo to Nvidia employees acknowledging the affair. You can read the full text below. To my […]",
    "pub_date": "2026-11-08",
    "source": "The Verge AI",
    "category": "AI 产业"
  },
  {
    "title": "Nvidia is investigating Jensen Huang’s relationship with a Chinese spy",
    "link": "https://www.theverge.com/ai-artificial-intelligence/1029562/nvidia-investigating-jensen-huang-relationship-chinese-spy",
    "description": "Nvidia has announced that it is opening an investigation into CEO Jensen Huang and his relationship with Megaspeed executive Alice Huang, who was reportedly recruited by China's Ministry of State Security to spy on the company. A statement posted by the board of directors reads: The NVIDIA Board is initiating an independent investigation in light […]",
    "pub_date": "2026-11-08",
    "source": "The Verge AI",
    "category": "AI 产业"
  },
  {
    "title": "Apple is racing to make Siri more agentic",
    "link": "https://www.theverge.com/ai-artificial-intelligence/1029552/apple-siri-ai-agentic",
    "description": "Bloomberg's Mark Gurman says CEO John Ternus is pressuring AI czar Craig Federighi to accelerate the Siri roadmap and deliver a powerful AI agent that can compete with OpenAI's Dots or Meta's Muse. While Federighi has delivered a functional version of Siri AI on an incredibly short timeline, the company has no illusions that it's […]",
    "pub_date": "2026-11-08",
    "source": "The Verge AI",
    "category": "AI 产业"
  },
  {
    "title": "Elvis and Eminem rights holders are suing Suno",
    "link": "https://www.theverge.com/ai-artificial-intelligence/1029533/elvis-eminem-suno-ai-music-clone-lawsuit",
    "description": "Suno is facing yet another pair of lawsuits. A group of rights holders of Elvis Presley's music and the publisher of some of Eminem's biggest records are suing the AI music company, claiming it illegally generates music and lyrics that mimic those artists. The lawyers in the Presley suit claim that Suno has violated Tennessee's […]",
    "pub_date": "2026-11-08",
    "source": "The Verge AI",
    "category": "AI 产业"
  },
  {
    "title": "NYT Cooking’s AI assistant saved my weeknight chicken, but almost ruined my cake",
    "link": "https://www.theverge.com/tech/1029489/nyt-cooking-ai-assistant-review",
    "description": "Around 7PM each weeknight, I find myself standing in front of the fridge, trying to decide on something for dinner that won't make my husband complain, \"Chicken again?\" Yes, I should meal plan more, but I don't, so this is where I'm at. A nightly battle in which the chicken usually wins. Recently, my best […]",
    "pub_date": "2026-11-08",
    "source": "The Verge AI",
    "category": "AI 产业"
  },
  {
    "title": "Nvidia CEO Jensen Huang admits to having an affair with suspected Chinese spy",
    "link": "https://www.tomshardware.com/pc-components/gpus/nvidia-ceo-jensen-huang-admits-to-having-an-affair-with-suspected-chinese-spy-jensen-apologizes-in-letter-to-staff-company-board-forms-independent-committee-to-investigate",
    "description": "Nvidia's board of directors is investigating a report about Jensen Huang's alleged affair with a client, claims it is still confident in Jensen and leadership team.",
    "pub_date": "2026-11-08",
    "source": "Tom's Hardware",
    "category": "芯片/市场"
  },
  {
    "title": "Diamond Foundry creates world's first 200mm single-crystal diamond wafer",
    "link": "https://www.tomshardware.com/pc-components/cooling/diamond-foundry-creates-worlds-first-200mm-single-crystal-diamond-wafer-massive-gem-aims-to-solve-ai-chip-cooling-crisis-envisioned-as-a-cooling-material-for-semiconductors",
    "description": "This 200mm single-crystal diamond wafer is designed to efficiently remove heat and prevent hotspots from forming on AI processors.",
    "pub_date": "2026-11-08",
    "source": "Tom's Hardware",
    "category": "芯片/市场"
  },
  {
    "title": "Logitech G502 X Lightspeed Review: No lights, same price",
    "link": "https://www.tomshardware.com/peripherals/gaming-mice/logitech-g502-x-lightspeed-review",
    "description": "Logitech's G502 X Lightspeed strips the G502 X Plus of its lighting, but retains the $160 price tag.",
    "pub_date": "2026-11-08",
    "source": "Tom's Hardware",
    "category": "芯片/市场"
  },
  {
    "title": "Japanese arcades suffer week-long blackout following Sega server hack",
    "link": "https://www.tomshardware.com/video-games/japanese-arcades-suffer-week-long-blackout-following-sega-server-hack-bandai-namco-titles-resume-trial-operations-as-sega-games-remain-offline",
    "description": "The sensory overload in video game arcades in Japan was eerily absent from some venues this week.",
    "pub_date": "2026-11-08",
    "source": "Tom's Hardware",
    "category": "芯片/市场"
  },
  {
    "title": "The end of an era as Linux 7.5 purges the last 30-year-old Intel MMX optimizations from Pentium age",
    "link": "https://www.tomshardware.com/software/linux/the-end-of-an-era-as-linux-7-5-purges-the-last-30-year-old-intel-mmx-optimizations-from-pentium-age-open-source-os-retires-ancient-1997-pentium-instructions-to-streamline-code",
    "description": "Linux developers are preparing to make Intel’s ancient MultiMedia eXtensions irrelevant, with the last MMX code now set to be removed from the kernel.",
    "pub_date": "2026-11-08",
    "source": "Tom's Hardware",
    "category": "芯片/市场"
  },
  {
    "title": "Ukraine builds combat robots to hunt Russian troops in underground gas pipelines",
    "link": "https://www.tomshardware.com/tech-industry/robotics/ukraine-builds-combat-robots-to-hunt-russian-troops-in-underground-gas-pipelines-ugvs-adapted-following-15-kilometer-subterranean-assault",
    "description": "Ukraine is developing a new class of combat robots designed to operate inside underground gas pipelines.",
    "pub_date": "2026-11-08",
    "source": "Tom's Hardware",
    "category": "芯片/市场"
  },
  {
    "title": "Nvidia released its 8800 GTX GPU 20 years ago today, celebrates with Steam game homage",
    "link": "https://www.tomshardware.com/pc-components/gpus/nvidia-released-its-8800-gtx-gpu-20-years-ago-today-celebrates-with-steam-game-homage-interactive-demos-eye-watering-minimum-requirements-include-rtx-4070-32gb-ram-and-30gb-storage",
    "description": "On this day in 2006, Nvidia released the legendary GeForce 8800 GTX graphics card and it is celebrating the event with a very demanding (but free) interactive Steam demo.",
    "pub_date": "2026-11-08",
    "source": "Tom's Hardware",
    "category": "芯片/市场"
  },
  {
    "title": "Open-source GPU task manager reveals exactly what's eating your VRAM",
    "link": "https://www.tomshardware.com/pc-components/gpus/open-source-gpu-task-manager-reveals-exactly-whats-eating-your-vram-microsoft-vps-new-gpu-taskman-tool-reveals-every-process-using-your-gpu-how-much-memory-each-uses-and-breaks-down-ai-and-llm-workloads",
    "description": "A new open-source GitHub project called gputaskman has been released by Microsoft VP Scott Hanselman.",
    "pub_date": "2026-11-08",
    "source": "Tom's Hardware",
    "category": "芯片/市场"
  },
  {
    "title": "Hundreds arrested after Microsoft data center protest turns violent",
    "link": "https://www.tomshardware.com/tech-industry/data-centers/hundreds-arrested-after-microsoft-data-center-protest-turns-violent-stop-dirty-data-centers-coalition-demands-halt-to-ai-data-center-expansion-dutch-police-seize-break-in-tools-suspected-stolen-items-from-construction-site",
    "description": "It's unclear which group entered the construction site first, but the action led to the arrest of 150 to 200 protesters.",
    "pub_date": "2026-11-08",
    "source": "Tom's Hardware",
    "category": "芯片/市场"
  },
  {
    "title": "Two Chinese companies cleared to buy banned Nvidia AI chips have empty offices and unknown addresses",
    "link": "https://www.tomshardware.com/tech-industry/artificial-intelligence/two-chinese-companies-cleared-to-buy-banned-nvidia-ai-chips-have-empty-offices-and-unknown-addresses-investigation-reveals-businesses-have-ties-to-sanctioned-chinese-military-suppliers",
    "description": "The offices for New Matrix and Maginfra, both approved to receive H200 chips, appear abandoned, and people in the buildings say they're unfamiliar with the companies or have never seen anyone working there.",
    "pub_date": "2026-11-08",
    "source": "Tom's Hardware",
    "category": "芯片/市场"
  },
  {
    "title": "PC's with 64GB of RAM plummet 18% as memory prices soar",
    "link": "https://www.tomshardware.com/pc-components/ram/pcs-with-64gb-of-ram-plummet-18-percent-as-memory-prices-soar-cpu-z-install-base-data-shows-ddr4-making-a-surprise-comeback",
    "description": "CPU-Z data reveals PC memory capacity is dropping for the first time ever. Driven by skyrocketing AI DRAM prices, 64GB RAM adoption plummeted 18% YoY.",
    "pub_date": "2026-11-08",
    "source": "Tom's Hardware",
    "category": "芯片/市场"
  },
  {
    "title": "Homelabber uses second-gen Optane memory sticks to run a 2.8-trillion-parameter AI model on CPU alone",
    "link": "https://www.tomshardware.com/tech-industry/artificial-intelligence/homelabber-uses-second-gen-optane-memory-sticks-to-run-a-2-8-trillion-parameter-ai-model-on-cpu-alone-warns-that-optanes-extreme-heat-can-burn-out-nearby-memory-dram-used-blower-fans-to-prevent-melting-ram",
    "description": "A Reddit homelab user ran Moonshot AI’s 2.8-trillion-parameter Kimi K3 CPU-only on Optane PMem 200 at 0.85 tokens/s with a 1-bit quant.",
    "pub_date": "2026-11-08",
    "source": "Tom's Hardware",
    "category": "芯片/市场"
  },
  {
    "title": "Pocket-sized Ukrainian receiver intercepts Russian strike drone video feeds up to six miles away",
    "link": "https://www.tomshardware.com/tech-industry/drones/pocket-sized-ukrainian-receiver-intercepts-russian-strike-drone-video-feeds-up-to-six-miles-away-device-only-slightly-heavier-than-a-smartphone-intercepts-analog-video-signals-sent-to-russian-operators",
    "description": "The D·Vision SDR can intercept signals from 500 MHz to 8.7 GHz, covering the 4.1-4.5 GHz spectrum that Russian Molniya strike drones use to communicate with their operators.",
    "pub_date": "2026-11-08",
    "source": "Tom's Hardware",
    "category": "芯片/市场"
  },
  {
    "title": "WoW: Forever launch used 70,480 CPU cores and 251 terabytes of RAM",
    "link": "https://www.tomshardware.com/video-games/pc-gaming/wow-forever-launch-used-70-480-cpu-cores-and-251-terabytes-of-ram-3-924-virtual-machines-powered-one-of-world-of-warcrafts-smoothest-launches-ever",
    "description": "Inside the astonishing hardware behind World of Warcraft: Forever. 251TB of RAM and 70K cores kept millions of players online without a hitch.",
    "pub_date": "2026-11-08",
    "source": "Tom's Hardware",
    "category": "芯片/市场"
  },
  {
    "title": "PC air duster motors power 21-inch DIY remote control plane at 130,000 RPM",
    "link": "https://www.tomshardware.com/maker-stem/pc-air-duster-motors-power-21-inch-diy-remote-control-plane-at-130-000-rpm-usd23-air-duster-power-styrofoam-a10-warthog-style-rc-plane-hits-the-skies-much-faster-than-expected",
    "description": "A remote-control electronics and DIY hobbyist was surprised by a model airplane they built, powered by a pair of PC air duster engines.",
    "pub_date": "2026-11-08",
    "source": "Tom's Hardware",
    "category": "芯片/市场"
  },
  {
    "title": "Terafab Is Now Aiming For A Memory Production Capacity Of Around 700,000 Wafers Per Month, Which Is Roughly Equal To Samsung’s Entire DRAM Capacity",
    "link": "https://wccftech.com/terafab-is-now-aiming-for-a-memory-production-capacity-of-around-700000-wafers-per-month-which-is-roughly-equal-to-samsungs-entire-dram-capacity/",
    "description": "Terafab, the chip manufacturing joint venture between SpaceX and Tesla, is certainly aiming for an unprecedented level of vertical control over the full compute stack, one that ensures a steady and copious supply of memory and logic chips for the Optimus humanoid robots and space-based data centers. Elon Musk's Terafab has now informed its suppliers that it is aiming for a production capacity of around 1 million wafers per month by 2032 For the benefit of those who might not be aware, Terafab is",
    "pub_date": "2026-11-08",
    "source": "Wccftech",
    "category": "芯片/市场"
  },
  {
    "title": "NVIDIA Announces A Board Investigation Into A Purported Foreign Influence Operation After Jensen Huang Admits That He Was “Unfaithful” To His Wife, As Questions Emerge On The Suspect Timing Of The Initial Leak",
    "link": "https://wccftech.com/nvidia-announces-a-board-investigation-into-a-purported-foreign-influence-operation-after-jensen-huang-admits-that-he-was-unfaithful-to-his-wife-as-questions-emerge-on-the-suspect-timing-of-the-i/",
    "description": "Jensen Huang's love life has suddenly become the most immediate point of consternation for NVIDIA, which now finds itself besieged, as its policy towards China continues to be scrutinized amid salacious allegations of a foreign-sponsored influence operation. Rather than allow this story to mushroom into an epic litany of innuendoes and gossip, NVIDIA has now chosen to take the initiative by launching a formal investigation. The New York Times reveals that Marco Rubio, an avowed China hawk, was t",
    "pub_date": "2026-11-08",
    "source": "Wccftech",
    "category": "芯片/市场"
  },
  {
    "title": "Elon Musk Believes SpaceX’s ~100,000 V4 Starlink Satellites Are Enough To “Outcompete Undersea Cables,” As Iran-Linked Ships Seen Lingering Over Such Cables In The Gulf Of Oman",
    "link": "https://wccftech.com/elon-musk-believes-spacexs-100000-v4-starlink-satellites-are-enough-to-outcompete-undersea-cables-as-iran-linked-ships-seen-lingering-over-such-cables-in-the-gulf-of-oman/",
    "description": "Elon Musk believes SpaceX is building a redundant backbone for the internet in the Low-Earth Orbit (LEO). And, just around 100,000 V4 Starlink satellites will suffice to gain an acceptable level of redundancy, one that can't be easily threatened en masse by hostile actors. Each SpaceX V4 satellite will sport 100 lasers, where each such laser operates at a throughput of 10 Tbsp As we noted in July, SpaceX is now ready to mass produce its V3 (or Gen3) Starlink satellites that sport the following s",
    "pub_date": "2026-11-08",
    "source": "Wccftech",
    "category": "芯片/市场"
  },
  {
    "title": "For Just $249, Micro Center Bundles Ryzen 5 5600X3D, 16 GB DDR4 RAM, And B550 Motherboard For A Limited Time",
    "link": "https://wccftech.com/ryzen-5600x3d-motherboard-and-16-gb-ddr4-bundle-micro-center-dropped-it-to-just-249/",
    "description": "This is going to be one of the fastest, yet the cheapest X3D builds on an AM4 platform, provided you can visit your nearest Micro Center. Micro Center Slashes $194 Off Ryzen 5600X3D, B550 Motherboard, and 16 GB DDR4 RAM, Dropping it to Just $249 for a Limited Time DDR5 memory and its platforms are crazy expensive these days. While we have an excellent $650 Ryzen 7700X3D, 32 GB DDR5, motherboard bundle selling at Micro Center, not everyone has the budget to spend over $600 in just three component",
    "pub_date": "2026-11-08",
    "source": "Wccftech",
    "category": "芯片/市场"
  },
  {
    "title": "U.S. Voters Favor Data Center Restrictions In 40 Of 41 Local Ballot Measures, Putting The AI Boom Under Pressure",
    "link": "https://wccftech.com/u-s-voters-favor-data-center-restrictions-in-40-of-41-local-ballot-measures-putting-the-ai-boom-under-pressure/",
    "description": "U.S. voters favored restrictions on data center development in 40 of 41 local ballot measures during the November 3 midterm elections. Image credit: Hanwha Data Centers.",
    "pub_date": "2026-11-08",
    "source": "Wccftech",
    "category": "芯片/市场"
  },
  {
    "title": "Investigation Finds Chinese Military-Linked Firms Somehow Gained Approval To Assemble NVIDIA H200 AI GPUs, Highlighting A Half-Baked U.S. Approval System",
    "link": "https://wccftech.com/us-approved-nvidia-h200-sales-chinese-firms-empty-offices-military-ties/",
    "description": "NVIDIA’s H200 hasn’t received a blanket ban in China under U.S. export control rules, but these chips will still be subjected to routine approval before being shipped out. However, the latest development could force the Trump administration to change its stance. After all, a fresh investigation reveals that federal regulators cleared the aforementioned AI GPU shipments to Chinese entities that were operating out of deserted offices with direct links to sanctioned military suppliers. U.S. regulat",
    "pub_date": "2026-11-08",
    "source": "Wccftech",
    "category": "芯片/市场"
  },
  {
    "title": "AMD Acknowledges Radeon Driver Bug Causing Constant SSD Writes, Fix In The Works",
    "link": "https://wccftech.com/amd-acknowledges-radeon-driver-bug-causing-constant-ssd-writes-fix-in-the-works/",
    "description": "Some AMD Radeon users are reporting an unusual graphics driver bug that causes continuous background writes to their SSDs, even when their systems are otherwise idle. The issue appears to involve AMD External Events Utility, a component of AMD's graphics driver software, and has reportedly persisted across multiple Adrenalin releases. A recent Reddit PSA by user darklinkpower brought renewed attention to the issue, highlighting reports of the atieclxx.exe process continuously accessing the syste",
    "pub_date": "2026-11-08",
    "source": "Wccftech",
    "category": "芯片/市场"
  },
  {
    "title": "TSMC Is Working On A BEOL Memory That Can Leverage The Larger Footprint Of The Processor Die To Its Advantage, Even As It Issues A Circuitous Denial On 3D DRAM Development",
    "link": "https://wccftech.com/tsmc-is-working-on-a-beol-memory-that-can-leverage-the-larger-footprint-of-the-processor-die-to-its-advantage-even-as-it-issues-a-circuitous-denial-on-3d-dram-development/",
    "description": "When news first emerged earlier this week that TSMC was apparently entering the 3D DRAM business, it was trumpeted as a definitive proof that the memory sphere had finally graduated beyond its dreaded commodity status. Then, TSMC dashed that budding euphoria by issuing a rambling denial. And yet, the very wording of that statement gives us cause to continue to expect some movement on this front, especially as the world's largest contract chip manufacturer is already working on a novel Back-End-O",
    "pub_date": "2026-11-08",
    "source": "Wccftech",
    "category": "芯片/市场"
  },
  {
    "title": "The Cheapest AM5 X3D Build Starts At $649 With Ryzen 7 7700X3D, B650 Motherboard And 32 GB DDR5 RAM Kit Dropping From $954 To Just $649",
    "link": "https://wccftech.com/the-cheapest-am5-x3d-build-starts-at-649-with-ryzen-7-7700x3d-b650-motherboard-and-32-gb-ddr5-ram-kit-dropping-from-954-to-just-649/",
    "description": "If you don't want to spend $400+ for the Ryzen 7 9800X3D, and want to save sufficient cash for your GPU, get this bundle deal that comes with a good 32 GB DDR5 RAM kit under $650. Micro Center Slashes $304 Off Ryzen 7 7700X3D, B650 Motherboard, and 32 GB DDR5 Bundle, Effectively Making the Processor Free Whether you were waiting for an upgrade or wanting to build a PC from scratch, this bundle deal might be perfect for you. This particular bundle is particularly perfect if you want DDR5 memory c",
    "pub_date": "2026-11-08",
    "source": "Wccftech",
    "category": "芯片/市场"
  },
  {
    "title": "AMD Ryzen 7 9800X3D Drops To $399 At Newegg, While Many AM5 8-Core X3D Processors Got A Cut By Up $65",
    "link": "https://wccftech.com/amd-ryzen-7-9800x3d-drops-to-399-at-newegg/",
    "description": "The world's fastest gaming processor has dropped under $300 once again, and it's time to build a powerful gaming system. Newegg Slashes $70 Off Ryzen 7 9800X3D Price, Dropping it to Just $399, Its Lowest Price of the Year The world's fastest gaming processor is once again down to a historic low. If you have been waiting to upgrade to the fastest gaming CPU but want to save some bucks, then the Ryzen 7 9800X3D will be the perfect upgrade. This Zen 5-based processor launched two years ago and was ",
    "pub_date": "2026-11-08",
    "source": "Wccftech",
    "category": "芯片/市场"
  },
  {
    "title": "NVIDIA’s Jensen Huang Rejects Anthropic’s Total China Chip Ban Push, Says “I Completely Disagree” And Believes “America Is About Competition”",
    "link": "https://wccftech.com/nvidia-jensen-huang-rejects-anthropic-china-chip-ban-america-competition-vera-rubin/",
    "description": "The geopolitical tug-of-war over AI hardware has sparked fierce disagreement among the Silicon Valley elite. While frontier model creators advocate for total export bans, hardware leaders argue that abandoning global markets undermines American competitiveness. In an interview, NVIDIA CEO Jensen Huang says he completely disagrees with Anthropic’s Dario Amodei, insisting that American companies must compete rather than retreat. Jensen Huang fires back at Anthropic CEO over China chip bans, declar",
    "pub_date": "2026-11-08",
    "source": "Wccftech",
    "category": "芯片/市场"
  },
  {
    "title": "ASUS Launches XG Core Radeon RX 9060 XT LP External Graphics Card To “Accelerate” Gaming Performance But Is Capped At 75W",
    "link": "https://wccftech.com/asus-launches-xg-core-radeon-rx-9060-xt-lp-external-graphics-card/",
    "description": "ASUS released another external GPU, but there some limitations imposed on it will throttle gaming performance. ASUS Debuts Radeon RX 9060 XT LP-Powered XG Core eGPU With 75W Power And 1.6 GHz Cap Inside a Small 144 mm Chassis ASUS is clearly aiming for more external GPU solutions than ever, but it appears its latest addition brings several limitations. The company recently introduced its new XG Core Radeon RX 9060 XT LP external graphics card that comes in a small enclosure for easy portability.",
    "pub_date": "2026-11-08",
    "source": "Wccftech",
    "category": "芯片/市场"
  },
  {
    "title": "DFRobot’s DX-M1 Is An AI Accelerator That Uses Your M.2 Slot And Brings 25 TOPS Of Performance At 5W For Just $139, But Forget About Running Heavy LLMs",
    "link": "https://wccftech.com/dfrobot-dx-m1-25-tops-m2-ai-accelerator-module-raspberry-pi-pc/",
    "description": "Power hungry GPUs and expensive cloud API subscriptions are the standard when dabbling with LLMs, but edge computing requires a completely different approach. Most users do not require massive server racks just to handle localized computer vision or object detection tasks, and that’s where hardware like DFRobot’s DX-M1 comes into play. Requiring just one M.2 slot on your motherboard, this AI accelerator packs some serious inference muscle into a standard storage input while costing only $139. Th",
    "pub_date": "2026-11-08",
    "source": "Wccftech",
    "category": "芯片/市场"
  },
  {
    "title": "Broken MSI Laptop Was Stripped Down To The Bare Motherboard And Its Essentials To Run A Custom Home Assistant, With A Little Help From Claude",
    "link": "https://wccftech.com/user-builds-frankenstein-homelab-stripping-old-msi-laptop-motherboard-wall-mount/",
    "description": "MSI’s older laptops have notoriously terrible build quality, but one victim didn’t end up discarding the hardware after the display was separated from the assembly. Instead, the owner decided to pursue extreme resourcefulness and repurposed the bare motherboard with RAM and storage to make a server that controls his lights, AC, and more. By wall mounting the MSI motherboard and enabling “Wake on Power,” the repurposed server automatically switches on to maintain connectivity The inventive setup ",
    "pub_date": "2026-11-08",
    "source": "Wccftech",
    "category": "芯片/市场"
  },
  {
    "title": "NVIDIA’s Development Of Custom HBM Drops Samsung’s And TSMC’s Foundry Rivalry, As Both Manufacturers Join Forces To Develop “Base Die” On The 3nm Node [Update]",
    "link": "https://wccftech.com/nvidia-custom-hbm-samsung-tsmc-3nm-base-die/",
    "description": "Update - The latest word on the street is that TSMC hasn’t just been tapped to mass produce NVIDIA’s NVHBM base die, but the GPU manufacturer has reportedly requested the Taiwanese firm to begin 3D DRAM production. It didn’t take long for TSMC to comment, as it denies any plans to mass produce 3D DRAM, choosing to stick with logic chip manufacturing. Samsung has typically adopted a “turnkey” approach when developing HBM’s core and base dies, but according to the latest report, NVIDIA’s custom NV",
    "pub_date": "2026-11-08",
    "source": "Wccftech",
    "category": "芯片/市场"
  },
  {
    "title": "After the midterms, things are looking rocky for Elon Musk and data centers",
    "link": "https://techcrunch.com/2026/11/07/after-the-midterms-things-are-looking-rocky-for-elon-musk-and-data-centers/",
    "description": "On Equity, we unpacked what the midterms mean for the tech industry.",
    "pub_date": "2026-11-07",
    "source": "TechCrunch AI",
    "category": "AI 产业"
  },
  {
    "title": "Megaspeed exec was recruited to spy on Nvidia CEO, according to US intelligence memo",
    "link": "https://techcrunch.com/2026/11/07/chinese-exec-was-recruited-to-spy-on-nvidia-ceo-according-to-us-intelligence-memo/",
    "description": "A memo circulated earlier this year reportedly claimed that China’s Ministry of State Security recruited a female technology executive to spy on Nvidia's CEO.",
    "pub_date": "2026-11-07",
    "source": "TechCrunch AI",
    "category": "AI 产业"
  },
  {
    "title": "Crusoe sells troubled Wyoming data center project to Google",
    "link": "https://techcrunch.com/2026/11/06/crusoe-sells-troubled-wyoming-data-center-project-to-google/",
    "description": "The deal highlights the challenges of developing massive AI data centers.",
    "pub_date": "2026-11-07",
    "source": "TechCrunch AI",
    "category": "AI 产业"
  },
  {
    "title": "The US let Nvidia sell chips to an empty office in China",
    "link": "https://www.theverge.com/ai-artificial-intelligence/1029483/nvidia-ai-chips-china-blacklist-government",
    "description": "Concerns are being raised that neither the Commerce Department nor Nvidia are doing their due diligence when it comes to vetting Chinese firms cleared to handle the company's H200 AI chips. According to The New York Times, New Matrix is on the list of approved firms, yet its offices are empty, \"a hollow gray shell […]",
    "pub_date": "2026-11-07",
    "source": "The Verge AI",
    "category": "AI 产业"
  },
  {
    "title": "AI broke the cybersecurity world. What’s next?",
    "link": "https://www.theverge.com/podcast/1029038/ai-cybersecurity-hackers-data-breach-dark-age-alex-stamos",
    "description": "Today, I’m talking with Alex Stamos, chief security officer at Cognition and longtime cybersecurity expert, about what a mess cybersecurity is right now. This episode is part one of a special series looking at AI in real life. I’ve always enjoyed talking to Alex because he’s so direct, and you’re going to hear him say […]",
    "pub_date": "2026-11-07",
    "source": "The Verge AI",
    "category": "AI 产业"
  },
  {
    "title": "This RTX 5060 gaming PC costs less than the Steam Machine",
    "link": "https://www.tomshardware.com/pc-components/this-rtx-5060-gaming-pc-costs-less-than-the-steam-machine-grab-the-ibuypower-slate-prebuilt-pc-with-massive-usd500-discount",
    "description": "Best Buy knocks $500 off the iBUYPOWER Slate, bringing this RTX 5060-powered gaming desktop down to $899 with a Ryzen 5 processor, 16GB of DDR5 memory, and a 1TB SSD",
    "pub_date": "2026-11-07",
    "source": "Tom's Hardware",
    "category": "芯片/市场"
  },
  {
    "title": "This week in Tom's Hardware Premium: November 7, 2026",
    "link": "https://www.tomshardware.com/tech-industry/this-week-in-toms-hardware-premium-november-7-2026-micron-roadmap-apples-touchscreen-ambitions-globalfoundries-interview-and-much-more",
    "description": "This week on Tom's Hardware Premium, we've published in-depth interviews, roadmaps, and features you won't want to miss.",
    "pub_date": "2026-11-07",
    "source": "Tom's Hardware",
    "category": "芯片/市场"
  },
  {
    "title": "US intelligence believes Jensen Huang had affair with Chinese spy in honeypot operation",
    "link": "https://www.tomshardware.com/tech-industry/artificial-intelligence/us-intelligence-believes-jensen-huang-had-romantic-relationship-with-chinese-spy-in-honeypot-operation-spy-suspect-linked-to-company-accused-of-smuggling-usd2-billion-in-ai-chips",
    "description": "U.S. intelligence sources suggest that Nvidia chief Jensen Huang was targeted by Chinese intelligence in a 'honeypot' operation involving Megaspeed executive Alice Huang.",
    "pub_date": "2026-11-07",
    "source": "Tom's Hardware",
    "category": "芯片/市场"
  },
  {
    "title": "Grab a new Elegoo 3D printer from as little as $159 right now, thanks to Black Friday sale, now live",
    "link": "https://www.tomshardware.com/3d-printing/grab-a-new-elegoo-3d-printer-from-as-little-as-usd159-right-now-thanks-to-black-friday-sale-now-live-early-discounts-mean-you-can-score-up-to-54-percent-off-filament-and-resin-machines-perfect-for-pro-hobbyists-and-beginners",
    "description": "Elegoo's November sale has begun, and you can score savings of up to 54% on a new printer for the entire month, as long as the stock lasts.",
    "pub_date": "2026-11-07",
    "source": "Tom's Hardware",
    "category": "芯片/市场"
  },
  {
    "title": "TeamGroup GA Pro 2TB SSD Review: A faltering attempt at a mid-range PCIe 5.0 SSD",
    "link": "https://www.tomshardware.com/pc-components/ssds/teamgroup-ga-pro-2tb-ssd-review",
    "description": "The TeamGroup GA Pro mostly misses. Decent QD8 and steady-state writes can’t make up for weak overall performance, poor efficiency, and high temps.",
    "pub_date": "2026-11-07",
    "source": "Tom's Hardware",
    "category": "芯片/市场"
  },
  {
    "title": "Nvidia's Jensen Huang officially called to Congress due to reports of a Chinese spy plot",
    "link": "https://www.tomshardware.com/tech-industry/big-tech/nvidias-jensen-huang-officially-called-to-congress-due-to-reports-of-a-chinese-spy-plot-officials-mention-growing-concerns-over-national-security",
    "description": "Nvidia's Jensen Huang officially called to Congress due to reports of Chinese plot — officials mention growing concerns over national security",
    "pub_date": "2026-11-07",
    "source": "Tom's Hardware",
    "category": "芯片/市场"
  },
  {
    "title": "TSMC denies exploring 3D DRAM at Nvidia's request",
    "link": "https://www.tomshardware.com/pc-components/dram/tsmc-denies-exploring-3d-dram-at-nvidias-request-advanced-memory-tech-is-still-years-from-market-viability",
    "description": "Nvidia reportedly asks TSMC to produce '3D DRAM' to address memory shortages.",
    "pub_date": "2026-11-07",
    "source": "Tom's Hardware",
    "category": "芯片/市场"
  },
  {
    "title": "Enthusiast abandons self-hosted Microsoft Exchange after 27 years, moving mailboxes to Microsoft 365",
    "link": "https://www.tomshardware.com/software/enthusiast-abandons-self-hosted-microsoft-exchange-after-27-years-moving-mailboxes-to-microsoft-365-replaces-final-on-premises-relay-with-postfix-starttls-and-lets-encrypt-certificates",
    "description": "A homelab enthusiast is retiring a Microsoft Exchange installation that began with Exchange 5.5 on Windows NT 4 in 1999. After migrating mailboxes to Microsoft 365, he kept Exchange 2019 running to relay local hardware and software alerts. Postfix on Ubuntu Server LTS will take over, with plans to add STARTTLS, Let's Encrypt certificates, and boot encryption",
    "pub_date": "2026-11-07",
    "source": "Tom's Hardware",
    "category": "芯片/市场"
  },
  {
    "title": "New Bluetooth High Data Throughput may finally satisfy audiophiles",
    "link": "https://www.tomshardware.com/peripherals/wearable-tech/new-bluetooth-high-data-throughput-may-finally-satisfy-audiophiles-bluetooth-hdt-offers-a-maximum-bandwidth-of-7-5mbps-allowing-true-lossless-transmission",
    "description": "Bluetooth HDT can offer a maximum bandwidth of 7.5 Mbps, allowing Bluetooth to be used with more sophisticated devices or big lossless audio files.",
    "pub_date": "2026-11-07",
    "source": "Tom's Hardware",
    "category": "芯片/市场"
  },
  {
    "title": "EA producer found 20,000 archival media assets in secret physical vault at its HQ",
    "link": "https://www.tomshardware.com/video-games/retro-gaming/ea-producer-found-20-000-archival-media-assets-in-secret-physical-vault-at-its-hq-betacam-vhs-and-d1-tapes-among-6000-assets-digitized-to-remaster-seven-classic-games",
    "description": "The discovery of thousands of archival media assets led to the creation of Anniversary Editions of some classic titles.",
    "pub_date": "2026-11-07",
    "source": "Tom's Hardware",
    "category": "芯片/市场"
  },
  {
    "title": "US FAA to eliminate floppy disks from air traffic control by 2028",
    "link": "https://www.tomshardware.com/tech-industry/us-faa-to-eliminate-floppy-disks-from-air-traffic-control-by-2028-new-system-will-centralize-flight-alerts-restricted-airspace-schedules-and-pilot-reports",
    "description": "The US federal Aviation Administration (FAA) is finally moving to retire floppy disks from its air traffic control infrastructure, with plans to to replace four decades-old information systems across 435 facilities by the end of 2028.",
    "pub_date": "2026-11-07",
    "source": "Tom's Hardware",
    "category": "芯片/市场"
  },
  {
    "title": "VANTRUE’s Nexus Series Of Dash Cams Are Up To 17% Off On Amazon With Up To 15% Discount At Checkout; Get 360-Degree Surveillance, Night Vision & More, From $250",
    "link": "https://wccftech.com/vantrue-nexus-dash-cam-lineup-amazon-deals-17-percent-off/",
    "description": "Driving through unpredictable city traffic or leaving your car parked in poorly lit lots carries constant risk, especially when standard dash cams leave massive blind spots around your vehicle’s sides and cabin. There’s also the problem of poor image quality that delivers subpar performance in low-light surroundings, but VANTRUE has scaled these obstacles with its top-end Nexus dash cam lineup. The N5S, N4 Pro S, and N4S are currently up to 17 percent off on Amazon, but that’s not all. You have ",
    "pub_date": "2026-11-07",
    "source": "Wccftech",
    "category": "芯片/市场"
  },
  {
    "title": "Mass Effect 3’s Co-op Multiplayer Is Revived with Legendary Edition Multiplayer Mod on N7 Day, Even as BioWare’s Closure Hangs Over the Celebration",
    "link": "https://wccftech.com/mass-effect-legendary-edition-multiplayer-n7-day-bioware-closure/",
    "description": "2026's N7 Day may be sad (albeit with a tinge of hope provided by a Canadian petition to the government) for Mass Effect fans following BioWare's closure, but the ME3Tweaks group (the same folks behind the Pinnacle Station and Happy Ending mods, for example) have a long-awaited gift in store for the community: Legendary Edition Multiplayer, now available for download on Nexus Mods. As you can easily guess, it is the Mass Effect 3 multiplayer ported to 2021's Legendary Edition, which included the",
    "pub_date": "2026-11-07",
    "source": "Wccftech",
    "category": "芯片/市场"
  },
  {
    "title": "Dual RTX PRO 6000 GPUs Worth $32,000 Narrowly Escape Catastrophic Meltdown Thanks To The Owner’s Early Visual Inspection, Says Frayed 12V-2×6 Cables Raised Alarm",
    "link": "https://wccftech.com/dual-rtx-pro-6000-workstation-12v-2x6-cable-sleeving-degradation-seasonic-psu/",
    "description": "NVIDIA’s RTX PRO 6000 might cost $16,000 a pop, but for running top-end local AI models, it’s a PC builder’s dream, and when you have two units running at a time, there’s really no need to give companies like OpenAI, Google, Anthropic, and others your hard-earned cash. However, since these GPUs cost as much as a brand-spanking-new sedan, it’s imperative that you monitor their operations closely. One owner did, and that’s exactly how he potentially saved both of his RTX PRO 6000 units, as the fra",
    "pub_date": "2026-11-07",
    "source": "Wccftech",
    "category": "芯片/市场"
  },
  {
    "title": "Mass Effect’s N7 Day Follows EA Shutting Down BioWare and Canceling Its Next Game, but Fans’ Petition Will Force the Canadian Government to Respond",
    "link": "https://wccftech.com/mass-effect-n7-day-bioware-closure-canada-petition/",
    "description": "Today is N7 Day, the annual day that celebrates BioWare's Mass Effect franchise. This year, though, it might very well be the saddest N7 Day to date, given that the studio was just shut down by Electronic Arts and its new Mass Effect Universe game was canceled as part of that process, with the publisher choosing to fund Star Wars Battlefront 3 instead. As someone once said in a beloved movie trilogy, though, there is still hope. Global fans have been pouring their love through the Change.org pet",
    "pub_date": "2026-11-07",
    "source": "Wccftech",
    "category": "芯片/市场"
  },
  {
    "title": "Intel Razor Lake-S Desktop CPUs Reportedly Arrive In 2028 On The Same LGA 1954 Socket As Nova Lake-S, Extending Multi-Generational Platform Support",
    "link": "https://wccftech.com/intel-razor-lake-s-desktop-cpus-arrive-in-2028-on-lga-1954-socket/",
    "description": "Intel's Razor Lake-S Desktop CPUs are reportedly going to arrive in 2028, a year after the launch of Nova Lake-S on the same LGA 1954 platform. Intel Razor Lake-S Desktop CPUs To Extend Multi-Generational Support On LGA 1954 Platforms It looks like Intel is preparing a slew of Razor Lake chips for 2028. While we wait for Nova Lake to launch next year in the form of Nova Lake-S, Nova Lake-HX, and Nova Lake-H configurations, the Razor Lake lineup will span all of these and a higher-end AX configur",
    "pub_date": "2026-11-07",
    "source": "Wccftech",
    "category": "芯片/市场"
  }
];
