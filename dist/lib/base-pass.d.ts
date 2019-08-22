import { ApplePass } from '../interfaces';
import { PassColor } from './pass-color';
import { PassImages } from './images';
import { Localizations } from './localizations';
import { PassStructure } from './pass-structure';
export declare class PassBase extends PassStructure {
    readonly images: PassImages;
    readonly localization: Localizations;
    constructor(fields?: Partial<ApplePass>, images?: PassImages, localizations?: Localizations);
    toJSON(): Partial<ApplePass>;
    passTypeIdentifier: string | undefined;
    teamIdentifier: string | undefined;
    serialNumber: string | undefined;
    /**
     *  Indicates that the sharing of pass can be prohibited.
     *
     * @type {boolean}
     */
    sharingProhibited: boolean | undefined;
    /**
     *  Indicates that the pass is void—for example, a one time use coupon that has been redeemed.
     *
     * @type {boolean}
     */
    voided: boolean;
    /**
     * Date and time when the pass expires.
     *
     */
    expirationDate: ApplePass['expirationDate'];
    /**
     * Date and time when the pass becomes relevant. For example, the start time of a movie.
     * Recommended for event tickets and boarding passes; otherwise optional.
     *
     * @type {string | Date}
     */
    relevantDate: ApplePass['relevantDate'];
    /**
     * A list of iTunes Store item identifiers for the associated apps.
     * Only one item in the list is used—the first item identifier for an app
     * compatible with the current device.
     * If the app is not installed, the link opens the App Store and shows the app.
     * If the app is already installed, the link launches the app.
     */
    associatedStoreIdentifiers: ApplePass['associatedStoreIdentifiers'];
    /**
     * Brief description of the pass, used by the iOS accessibility technologies.
     * Don’t try to include all of the data on the pass in its description,
     * just include enough detail to distinguish passes of the same type.
     */
    description: string | undefined;
    /**
     * Display name of the organization that originated and signed the pass.
     */
    organizationName: string | undefined;
    /**
     * Optional for event tickets and boarding passes; otherwise not allowed.
     * Identifier used to group related passes.
     * If a grouping identifier is specified, passes with the same style,
     * pass type identifier, and grouping identifier are displayed as a group.
     * Otherwise, passes are grouped automatically.
     * Use this to group passes that are tightly related,
     * such as the boarding passes for different connections of the same trip.
     */
    groupingIdentifier: string | undefined;
    /**
     * If true, the strip image is displayed without a shine effect.
     * The default value prior to iOS 7.0 is false.
     * In iOS 7.0, a shine effect is never applied, and this key is deprecated.
     */
    suppressStripShine: boolean;
    /**
     * Text displayed next to the logo on the pass.
     */
    logoText: string | undefined;
    /**
     * The URL of a web service that conforms to the API described in PassKit Web Service Reference.
     * The web service must use the HTTPS protocol; the leading https:// is included in the value of this key.
     * On devices configured for development, there is UI in Settings to allow HTTP web services.
     *
     * @see {@link https://developer.apple.com/library/archive/documentation/PassKit/Reference/PassKit_WebService/WebService.html#//apple_ref/doc/uid/TP40011988}
     */
    webServiceURL: URL | string | undefined;
    /**
     * The authentication token to use with the web service.
     * The token must be 16 characters or longer.
     */
    authenticationToken: string | undefined;
    /**
     * Background color of the pass, specified as an CSS-style RGB triple.
     *
     * @example rgb(23, 187, 82)
     */
    backgroundColor: [number, number, number] | string | undefined | PassColor;
    /**
     * Foreground color of the pass, specified as a CSS-style RGB triple.
     *
     * @example rgb(100, 10, 110)
     */
    foregroundColor: [number, number, number] | string | undefined | PassColor;
    /**
     * Color of the label text, specified as a CSS-style RGB triple.
     *
     * @example rgb(255, 255, 255)
     */
    labelColor: [number, number, number] | string | undefined | PassColor;
    /**
     * Maximum distance in meters from a relevant latitude and longitude that the pass is relevant.
     * This number is compared to the pass’s default distance and the smaller value is used.
     */
    maxDistance: number | undefined;
    /**
     * Beacons marking locations where the pass is relevant.
     */
    beacons: ApplePass['beacons'];
    /**
     * Information specific to the pass’s barcode.
     * The system uses the first valid barcode dictionary in the array.
     * Additional dictionaries can be added as fallbacks.
     */
    barcodes: ApplePass['barcodes'];
    /**
     * Adds a location where a pass is relevant.
     *
     * @param {number[] | { lat: number, lng: number, alt?: number } | { longitude: number, latitude: number, altitude?: number }} point
     * @param {string} [relevantText]
     * @returns {this}
     */
    addLocation(point: number[] | {
        lat: number;
        lng: number;
        alt?: number;
    } | {
        longitude: number;
        latitude: number;
        altitude?: number;
    }, relevantText?: string): this;
    locations: ApplePass['locations'];
}
