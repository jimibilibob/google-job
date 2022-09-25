import { StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import JobOffer from '../src/models/JobOffer';
import {
    CardAnnouncement,
    CardHeader,
    CardJobOffer,
    ChipCategory,
    Search,
    SectionHeader} from '../src/components';

export default function HomeScreen() {
    const jobOffers: JobOffer[] = [
        {
            iconUrl: '',
            title: 'UI/UX Designer',
            subtitle: 'Google LLC',
            location: 'California, United States',
            payment: '$10,000 - $25,000 / month'
        },
        {
            iconUrl: '',
            title: 'Sales & Marketing',
            subtitle: 'Paypal',
            location: 'New York, United States',
            payment: '$80,000 - $20,000 / month'
        },
        {
            iconUrl: '',
            title: 'Writing & Content',
            subtitle: 'Pinterest',
            location: 'Paris, France',
            payment: '$5,000 - $15,000 / month'
        },
        {
            iconUrl: '',
            title: 'Business Analyst',
            subtitle: 'Apple Inc.',
            location: 'Chicago, United States',
            payment: '$5,000 - $12,000 / month'
        },
        {
            iconUrl: '',
            title: 'Quality Assurance',
            subtitle: 'Spotify',
            location: 'Canberra, Australia',
            payment: '$12,000 - $25,000 / month'
        },
        {
            iconUrl: '',
            title: 'Comunity Officer',
            subtitle: 'Reddit Company',
            location: 'California, United States',
            payment: '$10,000 - $20,000 / month'
        },
    ];
    const categories: string[] = [
        'All', 'Design', 'Technology', 'Fiance', 'Marketing'
    ];
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <CardHeader/>
                <Search/>
                <CardAnnouncement/>
                <SectionHeader leftText='Recommendation' rightText='See All'/>
                <ScrollView horizontal={ true }>
                    {jobOffers.map((offer, index) => <CardJobOffer key={ index } {... offer } hasHorizontalMargin={ true }/>)}
                </ScrollView>
                <SectionHeader leftText='Recent Jobs' rightText='See All'/>
                <ScrollView horizontal={ true }>
                    {categories.map( (category, index) => <ChipCategory key={ index } title={ category }/> )}
                </ScrollView>
                <ScrollView>
                    {jobOffers.map((offer, index) => <CardJobOffer key={ index } {... offer}/>)}
                </ScrollView>
            </ScrollView>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        marginHorizontal: 12,
        marginTop: 12
    }
});
