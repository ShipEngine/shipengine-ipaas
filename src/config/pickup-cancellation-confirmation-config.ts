import { CustomData } from "../types";

/**
 * Confirmation that a package pickup has been canceled
 */
export interface PickupCancellationConfirmationConfig {
  /**
   * Indicates whether the pickup was successfully canceled.
   * If the pickup was _not_ canceled, then the `notes` field should contain
   * information and/or instructions for the customer. (e.g. "Please call ###-#### to cancel")
   */
  successful: boolean;

  /**
   * The carrier's cancellation ID, if any
   */
  cancellationID?: string;

  /**
   * Additional information/instructions regarding the cancellation
   * (e.g. "Please call ###-#### to cancel", "Cannot cancel because driver is en-route")
   */
  notes?: string;

  /**
   * Arbitrary data for that will be persisted by ShipEngine IPaaS.
   * If the pickup is later canceled, this data will be included.
   */
  customData?: CustomData;
}