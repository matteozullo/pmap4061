import { CommonServerSideParams } from '@/app/types/CommonServerSideParams';
import { SSGPageProps } from '@/layouts/core/types/SSGPageProps';
import { GetStaticProps } from 'next';

/**
 * The getCoreStaticProps is a function returning a getStaticProps function.
 *
 * The reason behind this choice are flexibility and code re-usability.
 * It makes it possible to customize the behavior of the core "getStaticProps" function by providing options.
 *
 * This is necessary for the 404 page, which must never return a { notFound: true } object.
 * It allows to conditionally return { notFound: true }, and avoid doing so for that particular page.
 */
export type GetCoreStaticProps = (options?: GetCoreStaticPropsOptions) => GetStaticProps<SSGPageProps, CommonServerSideParams>;

/**
 * Options allowed in GetCoreStaticProps function.
 */
export type GetCoreStaticPropsOptions = {
  is404: boolean;
};