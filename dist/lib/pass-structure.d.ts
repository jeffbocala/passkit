/**
 * Class that implements base structure fields setters / getters
 *
 * @see {@link https://developer.apple.com/library/content/documentation/UserExperience/Reference/PassKit_Bundle/Chapters/LowerLevel.html#//apple_ref/doc/uid/TP40012026-CH3-SW3}
 */
import { ApplePass, PassStyle, TransitType } from '../interfaces';
import { FieldsMap } from './fieldsMap';
import { NFCField } from './nfc-fields';
export declare class PassStructure {
    protected fields: Partial<ApplePass>;
    constructor(fields?: Partial<ApplePass>);
    /**
     * Pass type, e.g boardingPass, coupon, etc
     */
    style: PassStyle | undefined;
    /**
     * Required for boarding passes; otherwise not allowed.
     * Type of transit.
     * Must be one of the following values: PKTransitTypeAir, PKTransitTypeBoat, PKTransitTypeBus, PKTransitTypeGeneric,PKTransitTypeTrain.
     */
    transitType: TransitType | undefined;
    /**
     * NFC-enabled pass keys support sending reward card information as part of an Apple Pay transaction.
     *
     * NFC-enabled pass keys are only supported in passes that contain an Enhanced Passbook/NFC certificate.
     * For more information, contact merchant support at https://developer.apple.com/contact/passkit/.
     * **Only for storeCards with special Apple approval**
     *
     * @see {@link https://developer.apple.com/library/archive/documentation/UserExperience/Reference/PassKit_Bundle/Chapters/TopLevel.html#//apple_ref/doc/uid/TP40012026-CH2-DontLinkElementID_3}
     */
    readonly nfc: NFCField;
    readonly headerFields: FieldsMap;
    readonly auxiliaryFields: FieldsMap;
    readonly backFields: FieldsMap;
    readonly primaryFields: FieldsMap;
    readonly secondaryFields: FieldsMap;
}
