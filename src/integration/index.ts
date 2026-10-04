/**
 * SEP Integration Module
 *
 * Exports all SEP (Stellar Ecosystem Proposal) integration functions for
 * cross-border payments, deposits/withdrawals, KYC, and interactive flows.
 */

// ─── SEP-31 Direct Payments ─────────────────────────────────────────────────────
export {
  quoteDirectPayment,
  sendDirectPayment,
  trackDirectPayment,
  validateReceiver,
} from "./sep31DirectPayment";
export type {
  DirectPaymentQuoteRequest,
  DirectPaymentQuoteResponse,
  DirectPaymentRequest,
  DirectPaymentResponse,
  DirectPaymentStatusResponse,
} from "./sep31DirectPayment";

// ─── SEP-6 Deposit and Withdrawal ───────────────────────────────────────────────
export {
  getAssetInfo,
  initiateDeposit,
  initiateWithdraw,
  trackTransaction,
  getTransactions,
} from "./sep6Flow";
export type {
  AssetInfo,
  DepositRequest,
  DepositResponse,
  WithdrawalRequest,
  WithdrawalResponse,
  TransactionInfo,
} from "./sep6Flow";

// ─── SEP-12 Customer Info Collection and KYC ───────────────────────────────────
export {
  getKycFields,
  submitKycInfo,
  getKycStatus,
  deleteKycInfo,
  uploadKycDocument,
} from "./sep12Kyc";
export type {
  KycField,
  KycFieldsResponse,
  KycInfo,
  KycSubmissionResponse,
  KycStatusResponse,
} from "./sep12Kyc";

// ─── SEP-24 Interactive Deposit and Withdrawal ───────────────────────────────
export {
  getInteractiveAssetInfo,
  initiateInteractiveDeposit,
  initiateInteractiveWithdraw,
  monitorTransaction,
  getInteractiveTransactions,
  openInteractivePopup,
  pollTransactionStatus,
} from "./sep24Flow";
export type {
  InteractiveAssetInfo,
  InteractiveDepositRequest,
  InteractiveDepositResponse,
  InteractiveWithdrawalRequest,
  InteractiveWithdrawalResponse,
  InteractiveTransactionInfo,
  InteractiveFlowConfig,
} from "./sep24Flow";

// ─── Anchor, DID, governance, and federation integrations ─────────────────────
export {
  authenticateSep10,
  getSep6TransactionStatus,
  initiateSep6Transfer,
  initiateSep24Interactive,
} from "./anchors";
export type {
  AnchorAsset,
  AnchorRequestOptions,
  Sep10AuthOptions,
  Sep24InteractiveResult,
} from "./anchors";

export { deriveKey, rotateSecretKey, validateSecretKey } from "../shared/keyManagement";
export type {
  DerivedStellarKey,
  RotateSecretKeyOptions,
} from "../shared/keyManagement";

export {
  clearFederationAddressCache,
  resolveFederatedAddress,
} from "./federationResolver";
export type {
  FederationResolverOptions,
  ResolvedAddress,
} from "./federationResolver";

export {
  createDID,
  resolveDID,
  linkAccountToDID,
  verifyDIDOwnership,
  clearDIDLinks,
  STELLAR_DID_METHOD,
} from "./didSupport";
export type {
  DIDData,
  DIDDocument,
  StellarDIDDocument,
  DIDVerificationMethod,
  DIDInfo,
  DIDLinkRecord,
  DIDOwnershipProof,
  DIDVerificationResult,
  CreateDIDOptions,
  ResolveDIDOptions,
  LinkDIDOptions,
  VerifyDIDOptions,
  DIDServiceEndpoint,
  DIDResolver,
} from "./didSupport";

export {
  configureGovernance,
  createHttpGovernanceProvider,
  getProposal,
  getProposals,
  getVotingPower,
  normalizeProposal,
  resetGovernance,
  trackProposal,
  voteOnProposal,
  PROPOSAL_STATUSES,
  TERMINAL_PROPOSAL_STATUSES,
} from "./governance";
export type {
  GovernanceCallOptions,
  GovernanceNetwork,
  GovernanceProposal,
  GovernanceProvider,
  HttpGovernanceProviderOptions,
  ProposalId,
  ProposalStatus,
  ProposalTally,
  ProposalTracker,
  TrackProposalOptions,
  VoteChoice,
  VoteReceipt,
  VotingPower,
} from "./governance";

export { clearStellarTomlCache, fetchStellarToml, DEFAULT_STELLAR_TOML_CACHE_TTL_MS } from "./sep1Toml";
export type { FetchStellarTomlOptions, StellarToml } from "./sep1Toml";

export { completeSep10Auth, initiateSep10Auth, validateSep10Token } from "./sep10Auth";
export type { AuthToken, InitiateSep10AuthOptions } from "./sep10Auth";
