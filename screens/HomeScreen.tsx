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
            iconUrl: 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png',
            title: 'UI/UX Designer',
            subtitle: 'Google LLC',
            location: 'California, United States',
            payment: '$10,000 - $25,000 / month'
        },
        {
            iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqdsEWYm55oHNE8oGzrMDsPdbA0vGxebWEM48bvu2yXbRaIZpMAtqtjeXfmNcaxhgC5w&usqp=CAU',
            title: 'Sales & Marketing',
            subtitle: 'Paypal',
            location: 'New York, United States',
            payment: '$80,000 - $20,000 / month'
        },
        {
            iconUrl: 'https://i.pinimg.com/originals/1b/76/01/1b7601e035a83c13c208b4ec905ee6d9.png',
            title: 'Writing & Content',
            subtitle: 'Pinterest',
            location: 'Paris, France',
            payment: '$5,000 - $15,000 / month'
        },
        {
            iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpdFZ6LTg87NeCR_Ap6gF3pdcXG4ybOHSk3mnxJZRM-xt2R9lAM9mg8O7FM596SmOrdkg&usqp=CAU',
            title: 'Business Analyst',
            subtitle: 'Apple Inc.',
            location: 'Chicago, United States',
            payment: '$5,000 - $12,000 / month'
        },
        {
            iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Spotify.png/768px-Spotify.png',
            title: 'Quality Assurance',
            subtitle: 'Spotify',
            location: 'Canberra, Australia',
            payment: '$12,000 - $25,000 / month'
        },
        {
            iconUrl: 'https://www.iconpacks.net/icons/2/free-reddit-logo-icon-2436-thumb.png',
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
        marginHorizontal: 12
    }
});
