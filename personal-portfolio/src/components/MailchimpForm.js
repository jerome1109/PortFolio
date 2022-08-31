import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
    const postUrl = `https://yahoo.us14.list-manage.com/subscribe?u=283e8821f29be548f48eb1329&id=5c1df67253`;
    console.log(postUrl);
    return (
        <>
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <Newsletter
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </>
    )
}